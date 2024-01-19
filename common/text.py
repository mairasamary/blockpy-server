def compare_string_equality(submitted, expected) -> bool:
    if not submitted and bool(expected):
        return False
    submitted = str(submitted).strip()
    if isinstance(expected, str):
        return submitted == expected
    else:
        # Assume list of possible answers
        return submitted in expected