from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum  
from .routers import projects, contact

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router)
app.include_router(contact.router)

@app.get("/")
def read_root():
    return {"message": "Selamat datang di API Portfolio"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

# Handler untuk Vercel Serverless
handler = Mangum(app)