import React from 'react'

export const Company = () => {
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
          Bedrijf
        </h4>
        <div className="card-body">
          <form>
            <div className="form-check form-switch d-flex align-items-center justify-content-center">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label mb-3 mx-3"
                htmlFor="flexSwitchCheckDefault"
              >
                Block
              </label>
            </div>

            <div className="row">
              <div className="input-group mb-3">
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="form-control"
                  placeholder="Bedrijf"
                  aria-label="companyName"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-9">
                <div className="input-group mb-3   ">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="form-control"
                    placeholder="Adres"
                    aria-label="address"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="input-group mb-3   ">
                  <input
                    type="number"
                    id="number"
                    name="number"
                    className="form-control"
                    placeholder="Nr"
                    aria-label="number"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col-lg-1">
                <div className="input-group mb-3   ">
                  <input
                    type="text"
                    id="bus"
                    name="bus"
                    className="form-control"
                    placeholder="Bus"
                    aria-label="bus"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="input-group mb-3   ">
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    className="form-control"
                    placeholder="Postcode"
                    aria-label="postalCode"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="input-group mb-3   ">
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    className="form-control"
                    placeholder="Gemeente"
                    aria-label="postalCode"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="input-group mb-3   ">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Tel."
                    aria-label="PatchNr"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-group mb-3   ">
                  <input
                    type="text"
                    id="gsm"
                    name="gsm"
                    className="form-control"
                    placeholder="Gsm"
                    aria-label="gsm"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col">
                <div className="input-group mb-3   ">
                  <input
                    type="text"
                    id="fax"
                    name="fax"
                    className="form-control"
                    placeholder="Fax"
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
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col mt-auto">
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
