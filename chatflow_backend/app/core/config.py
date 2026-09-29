import os

from dotenv import load_dotenv

load_dotenv()


class Settings:
    PROJECT_NAME: str = "Chatflow API"
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL",
        "postgresql+psycopg2://chatflow_user:chatflow_password@localhost:5432/chatflow",
    )


settings = Settings()
