import React from 'react'

export const Employee = () => {
  return (
    <div className="container">
      <div
        className="card p-3 mx-3 mt-n5 shadow-lg mx-auto mt-5"
        style={{
          borderRadius: '10px',
          borderLeft: '8px #007bff solid',
          borderRight: 'none',
          borderTop: 'none',
          borderBottom: 'none',
        }}
      >
        <h4 className="card-title mb-3 text-primary text-uppercase text-center">
          Werknemer
        </h4>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-lg-3">
                <div
                  style={{ width: '100%' }}
                  className="d-flex justify-content-center mb-3"
                >
                  <img
                    src="images/loginIcone.png"
                    alt="loginIcone"
                    style={{ width: '200px' }}
                  />
                </div>
              </div>
              <div className="col-lg-9 mt-auto">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="input-group mb-3   ">
                      <input
                        type="email"
                        id="PatchNr"
                        className="form-control"
                        placeholder="Patch nr"
                        aria-label="PatchNr"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="input-group mb-3   ">
                      <input
                        type="email"
                        id="employeeNr"
                        className="form-control"
                        placeholder="Naam"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="input-group mb-3   ">
                      <input
                        type="email"
                        id="firstname"
                        className="form-control"
                        placeholder="Voornaam"
                        aria-label="Firstname"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <button
                      type="submit"
                      className="btn btn-success"
                      style={{ width: '100% ' }}
                    >
                      Aanmaken
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      style={{ width: '100% ' }}
                    >
                      Annuleren
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
