from typing import cast

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.auth import SignupResponse, UserCreate
from app.services.auth_service import create_user

router = APIRouter(prefix="/auth", tags=["auth"])


@router.get("/health")
def auth_health():
    return {"status": "ok"}


@router.post("/signup", response_model=SignupResponse, status_code=status.HTTP_201_CREATED)
def signup(user: UserCreate, db: Session = Depends(get_db)):
    try:
        created_user = create_user(db, user)
        created_id = cast(int, created_user.id)
        created_name = cast(str, created_user.name)
        created_email = cast(str, created_user.email)

        return SignupResponse(
            id=created_id,
            name=created_name,
            email=created_email,
        )
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc),
        ) from exc
