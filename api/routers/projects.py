from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db
from ..auth import get_current_user

router = APIRouter()


@router.get("/projects", response_model=list[schemas.ProjectResponse])
def get_projects(db: Session = Depends(get_db)):
    projects = db.query(models.Project).all()
    return projects


@router.post(
    "/projects",
    response_model=schemas.ProjectResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_project(
    project: schemas.ProjectBase,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    new_project = models.Project(**project.model_dump())
    db.add(new_project)
    db.commit()
    db.refresh(new_project)
    return new_project