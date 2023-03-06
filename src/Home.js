import React, { Component } from "react";
import europecar from "./images/Europecar.png"
import flexible from "./images/calendar.png"
import search from "./images/search.png"
import wallet from "./images/wallet.png"
import covid from "./images/covid.png"
import email_signup from "./images/email_signup.png"


class Home extends Component {
    render() {
        return (
            <div>

                <div>

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

                    <img src={europecar} alt="/" />
                </div>
                <br></br>
                <br></br>
                <br></br>


                <div className="flexi">

                    <div className="flex" >
                        <img src={flexible} alt="/" />

                        <div>
                            <h3>Flexible rentals
                            </h3>
                            <p>Cancel or change most bookings for
                                <br />
                                free up to 48 hours before pick-up
                            </p>
                        </div>

                    </div>

                    <div className="flex">
                        <img src={search} alt="/" />
                        <div><h3>No hidden fees
                        </h3>
                            <p>Know exactly what you’re paying
                            </p></div>

                    </div>

                    <div className="flex"> 
                        <img src={wallet} alt="/" />
                        <div>
                            <h3>Price Match Guarantee
                            </h3>
                            <p>Found the same deal for less? We’ll match the price.
                            </p>
                        </div>

                    </div>


                </div>

                <div>

                    <div>
                        <img src={covid} alt="/" />
                        <h3>Clean cars. Flexible bookings. Socially distant rental counters.
                        </h3>
                        <p>We’re working with our partners to keep you safe and in the driving seat.
                        </p>
                        <p>Find out more</p>
                    </div>
                    <div>
                        <img src={email_signup} alt="/" />
                        <h3>Subscribe for exclusive offers and deals!
                        </h3>
                        <form>

                        </form>
                    </div>


                </div>

            </div>
        )
    }
}

export default Home