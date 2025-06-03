import uuid
from typing import Union


def compare_string_equality(submitted: str, expected: Union[str, list[str]]) -> bool:
    if not submitted and bool(expected):
        return False
    submitted = str(submitted).strip()
    if isinstance(expected, str):
        return submitted == expected
    else:
        # Assume a list of possible answers
        return submitted in expected


def generate_unique_hex():
    return uuid.uuid4().hex


def generate_uuid() -> str:
    return str(uuid.uuid4())


def make_flavored_uuid_generator(flavor: str):
    def generate_flavored_uuid() -> str:
        return f"{flavor}-{uuid.uuid4()}"

    return generate_flavored_uuid
