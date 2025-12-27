import React, { useReducer } from "react";

const initialState = {
  step: 1,
  formValues: {
    name: "",
    email: "",
    username: "",
    password: ""
  },
  isSubmitted: false
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.field]: action.value
        }
      };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREVIOUS_STEP":
      return { ...state, step: state.step - 1 };
    case "SUBMIT_FORM":
      return { ...state, isSubmitted: true };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_FORM" });
  };

  return (
    <div>
      <h2>Step {state.step} / 3</h2>
      {!state.isSubmitted ? (
        <form onSubmit={handleSubmit}>
          {state.step === 1 && (
            <>
              <input
                name="name"
                placeholder="Name"
                value={state.formValues.name}
                onChange={handleChange}
              />
              <br />
              <input
                name="email"
                placeholder="Email"
                value={state.formValues.email}
                onChange={handleChange}
              />
              <br />
              <button
                type="button"
                onClick={() => dispatch({ type: "NEXT_STEP" })}
                disabled={!state.formValues.name || !state.formValues.email}
              >
                Next
              </button>
            </>
          )}

          {state.step === 2 && (
            <>
              <input
                name="username"
                placeholder="Username"
                value={state.formValues.username}
                onChange={handleChange}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={state.formValues.password}
                onChange={handleChange}
              />
              <br />
              <button
                type="button"
                onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: "NEXT_STEP" })}
                disabled={!state.formValues.username || !state.formValues.password}
              >
                Next
              </button>
            </>
          )}

          {state.step === 3 && (
            <>
              <h3>Review Details</h3>
              <p>Name: {state.formValues.name}</p>
              <p>Email: {state.formValues.email}</p>
              <p>Username: {state.formValues.username}</p>
              <p>Password: {state.formValues.password}</p>
              <button
                type="button"
                onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
              >
                Back
              </button>
              <button type="submit">Submit</button>
            </>
          )}
        </form>
      ) : (
        <div>
          <h3>Form Submitted Successfully ✅</h3>
          <button onClick={() => dispatch({ type: "RESET_FORM" })}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;