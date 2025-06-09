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