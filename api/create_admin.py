from api.database import engine, SessionLocal, Base
from api.models import User
from api.auth import get_password_hash

def create_admin():
    Base.metadata.create_all(bind=engine) # Pastikan tabel users dibuat
    db = SessionLocal()
    
    username = "admin"
    password = "rahasia123" # GANTI DENGAN PASSWORD RAHASIA KAMU!
    
    # Cek apakah admin sudah ada
    existing_user = db.query(User).filter(User.username == username).first()
    if existing_user:
        print(f"User '{username}' sudah ada.")
        db.close()
        return

    new_user = User(
        username=username,
        hashed_password=get_password_hash(password)
    )
    db.add(new_user)
    db.commit()
    print(f"Berhasil membuat admin! Username: {username} | Password: {password}")
    db.close()

if __name__ == "__main__":
    create_admin()