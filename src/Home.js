import React, { Component } from "react";
import img1 from "./images/Europecar.png"
import img2 from "./images/calendar.png"
import img3 from "./images/search.png"
import img4 from "./images/wallet.png"


class Home extends Component {
    render() {
        return (
            <div>

                <div className="container, display-flex, header">

                    <h3>Rentalcars.com Brand Logo</h3>
                    <button >Manage booking </button>

                    <h1>Car Rental – Search, Compare & Save</h1>
                    <p>Free cancellations on most bookings
                        60,000+ locations
                        Customer support in 40+ languages</p>

                </div>

                <div>
                    <h4>Connecting you to the biggest brands in car rental
                    </h4>

                    <img src={img1} alt="/" />
                </div>
                <br></br>
                <br></br>
                <br></br>


                <div className="flex">

                    <div>
                        <img src={img2} alt="/" />
                        <h3>Flexible rentals
                        </h3>
                        <p>Cancel or change most bookings for free up to 48 hours before pick-up
                        </p>
                    </div>

                    <div>
                        <img src={img3} alt="/" />
                        <h3>No hidden fees
                        </h3>
                        <p>Know exactly what you’re paying
                        </p>
                    </div>

                    <div>
                        <img src={img3} alt="/" />
                        <h3>Price Match Guarantee
                        </h3>
                        <p>Found the same deal for less? We’ll match the price.
                        </p>
                    </div>


                </div>


            </div>
        )
    }
}

export default Home