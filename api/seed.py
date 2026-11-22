from api.database import engine, SessionLocal, Base
from api.models import Project

def seed_db():
    # 1. Buat semua tabel di database Neon
    Base.metadata.create_all(bind=engine)
    print("Tabel database berhasil dibuat/dicek.")
    
    db = SessionLocal()
    
    # 2. Cek apakah data sudah ada
    if db.query(Project).first():
        print("Database sudah berisi data. Seed dilewati.")
        db.close()
        return

    # 3. Data Dummy
    projects = [
        Project(
            title="Website Portofolio",
            description="Proyek fullstack pertama saya menggunakan React dan FastAPI.",
            tech_stack="React, Vite, Tailwind, FastAPI, PostgreSQL",
            repo_url="https://github.com/username/portfolio",
            demo_url="https://portfolio.vercel.app",
            image_url="https://via.placeholder.com/150",
            featured=True
        ),
        Project(
            title="Aplikasi Cuaca",
            description="Aplikasi sederhana untuk mengecek cuaca harian.",
            tech_stack="HTML, CSS, JavaScript",
            repo_url="https://github.com/username/weather",
            demo_url="",
            image_url="https://via.placeholder.com/150",
            featured=False
        )
    ]
    
    # 4. Simpan ke database
    db.add_all(projects)
    db.commit()
    print("Seed berhasil! 2 project ditambahkan.")
    db.close()

if __name__ == "__main__":
    seed_db()