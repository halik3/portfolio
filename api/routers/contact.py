from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db

router = APIRouter()

@router.post("/contact", response_model=schemas.MessageResponse)
def create_message(payload: schemas.MessageCreate, db: Session = Depends(get_db)):
    # --- 1. CEK HONEYPOT (ANTI SPAM) ---
    if payload.website:
        raise HTTPException(status_code=400, detail="Spam terdeteksi")

   
    if not payload.name.strip() or not payload.message.strip():
        raise HTTPException(status_code=400, detail="Nama dan pesan tidak boleh kosong")
    
    if "@" not in payload.email:
        raise HTTPException(status_code=400, detail="Format email tidak valid")

    # --- 3. SIMPAN KE DATABASE ---
    new_message = models.Message(
        name=payload.name.strip(),
        email=payload.email.strip(),
        message=payload.message.strip()
    )
    db.add(new_message)
    db.commit()
    db.refresh(new_message)
    
    return new_message