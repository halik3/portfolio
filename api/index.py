from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from .routers import projects, contact

app = FastAPI()

# --- 1. MIDDLEWARE UNTUK MENGHAPUS PREFIX /api ---
class StripApiPrefixMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        if request.url.path.startswith("/api/"):
            request.scope["path"] = request.url.path[4:] or "/"
            request.scope["raw_path"] = request.scope["path"].encode()
        return await call_next(request)

app.add_middleware(StripApiPrefixMiddleware)

# --- 2. CORS MIDDLEWARE ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- 3. ROUTERS ---
app.include_router(projects.router)
app.include_router(contact.router)

@app.get("/")
def read_root():
    return {"message": "Selamat datang di API Portfolio"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

# --- 4. HANDLER VERCEL ---
handler = Mangum(app)