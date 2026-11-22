import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv

# Memuat isi file .env
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

# Perbaikan URL dari Neon
if DATABASE_URL:
    # Jika Neon memberikan URL berawalan postgres://, ubah ke postgresql://
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
    
    # PAKSA SQLAlchemy menggunakan psycopg2
    if DATABASE_URL.startswith("postgresql://"):
        DATABASE_URL = DATABASE_URL.replace("postgresql://", "postgresql+psycopg2://", 1)

# Membuat engine (koneksi) ke database
engine = create_engine(DATABASE_URL)

# Membuat sesi database
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class untuk model
Base = declarative_base()

# Fungsi untuk mendapatkan sesi database di endpoint API
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()