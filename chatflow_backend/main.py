from fastapi import FastAPI

from app.api.v1.auth import router as auth_router
from app.db.base import Base
from app.db.database import engine

app = FastAPI(title="Chatflow API")

Base.metadata.create_all(bind=engine)
app.include_router(auth_router)


@app.get("/")
def root():
    return {"message": "Chatflow API is running"}