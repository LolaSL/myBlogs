export function FormatError(errorResponse){
    switch (errorResponse.error.message) {
        case "EMAIL_EXISTS":
            return "Email already exists";
        default
}
}