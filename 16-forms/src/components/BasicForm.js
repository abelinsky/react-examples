import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(
      `${enteredFirstNameValue} ${enteredLastNameValue} ${enteredEmailValue}`
    );

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameHasError ? "invalid" : ""}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>
        <div className={`form-control ${lastNameHasError ? "invalid" : ""}`}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enteredLastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={`form-control ${emailHasError ? "invalid" : ""}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please input valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
