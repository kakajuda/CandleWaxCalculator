document.querySelector("form").onsubmit = ev =>{
    const volumeOfVessel = document.getElementById("volume").value;
    const fragrance = document.getElementById("fragrance").value;
    const numberOfVessel = document.getElementById("numberOfVessels").value;

    const waxWeight = volumeOfVessel * 0.86 * numberOfVessel;
    const fragranceWeight = waxWeight * fragrance / 100;

    console.log("You need: " + waxWeight + " grams of wax.");
    console.log("You need: " + fragranceWeight + " grams of fragrance.")

    document.getElementById("outputWax").innerHTML = "You need: " + waxWeight + " grams of wax.";
    document.getElementById("outputFragrance").innerHTML = "You need: " + fragranceWeight + " grams of fragrance.";

    ev.preventDefault();
}