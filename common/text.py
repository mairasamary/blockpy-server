import uuid
from typing import Union
from hashlib import sha256

def compare_string_equality(submitted, expected) -> bool:
    if not submitted and bool(expected):
        return False
    submitted = str(submitted).strip()
    if isinstance(expected, str):
        return submitted == expected
    else:
        # Assume list of possible answers
        return submitted in expected

def sha256_hash(contents):
    """
    Generate a SHA-256 hash of the given contents.

    :param contents: The contents to hash, as a string.
    :return: The SHA-256 hash of the contents.
    """
    return sha256(contents.encode('utf-8')).hexdigest()

def generate_unique_hex():
    return uuid.uuid4().hex


def generate_uuid() -> str:
    return str(uuid.uuid4())


def make_flavored_uuid_generator(flavor: str):
    def generate_flavored_uuid() -> str:
        return f"{flavor}-{uuid.uuid4()}"

    return generate_flavored_uuid
