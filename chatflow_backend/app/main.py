from fastapi import FastAPI

from app.db.database import engine
from app.db.base import Base

app = FastAPI(title="Chatflow API")

Base.metadata.create_all(bind=engine)


@app.get("/")
def root():
    return {"message": "Chatflow API is running"}
