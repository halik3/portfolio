from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum  # <-- Tambahan untuk Vercel
from .routers import projects, contact

app = FastAPI()

# CORS: Izinkan localhost (untuk tes lokal) dan domain Vercel nanti
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Sementara izinkan semua, kita perketat nanti di Vercel
    allow_credentials=False, # Harus False jika allow_origins=["*"]
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