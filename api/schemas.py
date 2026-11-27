from pydantic import BaseModel
from datetime import datetime

class ProjectBase(BaseModel):
    title: str
    description: str
    tech_stack: str
    repo_url: str | None = None
    demo_url: str | None = None
    image_url: str | None = None
    featured: bool = False

class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class MessageCreate(BaseModel):
    name: str
    email: str
    message: str
    website: str | None = None 

class MessageResponse(MessageCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

        # --- Skema untuk Autentikasi ---
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str | None = None

class UserResponse(BaseModel):
    id: int
    username: str

    class Config:
        from_attributes = True