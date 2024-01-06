def maybe_int(value):
    try:
        return int(value)
    except ValueError:
        return None
    except TypeError:
        return None


def maybe_float(value):
    try:
        return float(value)
    except ValueError:
        return None
    except TypeError:
        return None


def maybe_bool(value):
    if value is None:
        return False
    elif value.lower() == "true":
        return True
    return False
