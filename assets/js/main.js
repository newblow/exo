console.log("test");
const color = ["green", "red", "yellow", "brown"];
console.log(color);

color.push("blue");
console.log(color);

color.pop();
console.log(color);

color.map((color) => {
  // console.log(colori);
  console.log(`mon élément est ${color}`);
  // console.log();
});
console.log(color.slice(1, 2));

const [...rest] = color;
console.log(rest);

let coca = [...color, "orange,", "white"];
//console.log(coca);

//

let téléphone = {
  key: "value",
  phone: {
    stokage: 128,
    acecess: "headset",
    mark: "iphone",
},
};

let azerty = new téléphone();
azerty.stokage = ""
azerty.acecess = ""
azerty.stokage = 

Backend Paiement

<div class="container">
		<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light bg-black text-white">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Navbar</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a class="dropdown-item" href="#">Action</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">Another action</a>
								</li>
								<li><hr class="dropdown-divider"></li>
								<li>
									<a class="dropdown-item" href="#">Something else here</a>
								</li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
						</li>
					</ul>
					<form class="d-flex">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
						<button class="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
		<main>
			<div class="py-5 text-center mt-5">
				<h2>Checkout form</h2>
				<p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
			</div>

			<div class="row g-3">
				<div class="col-md-5 col-lg-4 order-md-last">
					<h4 class="d-flex justify-content-between align-items-center mb-3">
						<span class="text-muted">Your cart</span>
						<span class="badge bg-secondary rounded-pill">3</span>
					</h4>
					<ul class="list-group mb-3">
						<li class="list-group-item d-flex justify-content-between lh-sm">
							<div>
								<h6 class="my-0">Product name</h6>
								<small class="text-muted">Brief description</small>
							</div>
							<span class="text-muted">$12</span>
						</li>
						<li class="list-group-item d-flex justify-content-between lh-sm">
							<div>
								<h6 class="my-0">Second product</h6>
								<small class="text-muted">Brief description</small>
							</div>
							<span class="text-muted">$8</span>
						</li>
						<li class="list-group-item d-flex justify-content-between lh-sm">
							<div>
								<h6 class="my-0">Third item</h6>
								<small class="text-muted">Brief description</small>
							</div>
							<span class="text-muted">$5</span>
						</li>
						<li class="list-group-item d-flex justify-content-between bg-light">
							<div class="text-success">
								<h6 class="my-0">Promo code</h6>
								<small>EXAMPLECODE</small>
							</div>
							<span class="text-success">−$5</span>
						</li>
						<li class="list-group-item d-flex justify-content-between">
							<span>Total (USD)</span>
							<strong>$20</strong>
						</li>
					</ul>

					<form class="card p-2">
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Promo code">
							<button type="submit" class="btn btn-secondary">Redeem</button>
						</div>
					</form>
				</div>
				<div class="col-md-7 col-lg-8">
					<h4 class="mb-3">Billing address</h4>
					<form class="needs-validation" novalidate>
						<div class="row g-3">
							<div class="col-sm-6">
								<label for="firstName" class="form-label">First name</label>
								<input type="text" class="form-control" id="firstName" placeholder="" value="" required>
								<div class="invalid-feedback">
									Valid first name is required.
								</div>
							</div>

							<div class="col-sm-6">
								<label for="lastName" class="form-label">Last name</label>
								<input type="text" class="form-control" id="lastName" placeholder="" value="" required>
								<div class="invalid-feedback">
									Valid last name is required.
								</div>
							</div>

							<div class="col-12">
								<label for="username" class="form-label">Username</label>
								<div class="input-group">
									<span class="input-group-text">@</span>
									<input type="text" class="form-control" id="username" placeholder="Username" required>
									<div class="invalid-feedback">
										Your username is required.
									</div>
								</div>
							</div>

							<div class="col-12">
								<label for="email" class="form-label">Email
									<span class="text-muted">(Optional)</span>
								</label>
								<input type="email" class="form-control" id="email" placeholder="you@example.com">
								<div class="invalid-feedback">
									Please enter a valid email address for shipping updates.
								</div>
							</div>

							<div class="col-12">
								<label for="address" class="form-label">Address</label>
								<input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
								<div class="invalid-feedback">
									Please enter your shipping address.
								</div>
							</div>

							<div class="col-12">
								<label for="address2" class="form-label">Address 2
									<span class="text-muted">(Optional)</span>
								</label>
								<input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
							</div>

							<div class="col-md-5">
								<label for="country" class="form-label">Country</label>
								<select class="form-select" id="country" required>
									<option value="">Choose...</option>
									<option>United States</option>
								</select>
								<div class="invalid-feedback">
									Please select a valid country.
								</div>
							</div>

							<div class="col-md-4">
								<label for="state" class="form-label">State</label>
								<select class="form-select" id="state" required>
									<option value="">Choose...</option>
									<option>California</option>
								</select>
								<div class="invalid-feedback">
									Please provide a valid state.
								</div>
							</div>

							<div class="col-md-3">
								<label for="zip" class="form-label">Zip</label>
								<input type="text" class="form-control" id="zip" placeholder="" required>
								<div class="invalid-feedback">
									Zip code required.
								</div>
							</div>
						</div>

						<hr class="my-4">

						<div class="form-check">
							<input type="checkbox" class="form-check-input" id="same-address">
							<label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
						</div>

						<div class="form-check">
							<input type="checkbox" class="form-check-input" id="save-info">
							<label class="form-check-label" for="save-info">Save this information for next time</label>
						</div>

						<hr class="my-4">

						<h4 class="mb-3">Payment</h4>

						<div class="my-3">
							<div class="form-check">
								<input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required>
								<label class="form-check-label" for="credit">Credit card</label>
							</div>
							<div class="form-check">
								<input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
								<label class="form-check-label" for="debit">Debit card</label>
							</div>
							<div class="form-check">
								<input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required>
								<label class="form-check-label" for="paypal">PayPal</label>
							</div>
						</div>

						<div class="row gy-3">
							<div class="col-md-6">
								<label for="cc-name" class="form-label">Name on card</label>
								<input type="text" class="form-control" id="cc-name" placeholder="" required>
								<small class="text-muted">Full name as displayed on card</small>
								<div class="invalid-feedback">
									Name on card is required
								</div>
							</div>

							<div class="col-md-6">
								<label for="cc-number" class="form-label">Credit card number</label>
								<input type="text" class="form-control" id="cc-number" placeholder="" required>
								<div class="invalid-feedback">
									Credit card number is required
								</div>
							</div>

							<div class="col-md-3">
								<label for="cc-expiration" class="form-label">Expiration</label>
								<input type="text" class="form-control" id="cc-expiration" placeholder="" required>
								<div class="invalid-feedback">
									Expiration date required
								</div>
							</div>

							<div class="col-md-3">
								<label for="cc-cvv" class="form-label">CVV</label>
								<input type="text" class="form-control" id="cc-cvv" placeholder="" required>
								<div class="invalid-feedback">
									Security code required
								</div>
							</div>
						</div>

						<hr class="my-4">

						<button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
					</form>
				</div>
			</div>
		</main>

		<footer class="my-5 pt-5 text-muted text-center text-small">
			<p class="mb-1">&copy; 2017–2020 Company Name</p>
			<ul class="list-inline">
				<li class="list-inline-item">
					<a href="#">Privacy</a>
				</li>
				<li class="list-inline-item">
					<a href="#">Terms</a>
				</li>
				<li class="list-inline-item">
					<a href="#">Support</a>
				</li>
			</ul>
		</footer>
	</div>

