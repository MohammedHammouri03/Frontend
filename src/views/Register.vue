<template>
  <div class="register">
  </div>
  <section class="text-center">
    <!-- Hintergrundbild -->
    <div class="p-5 bg-image" style="
        background-image: url('https://toppng.com/uploads/preview/textured-backgrounds-for-websites-1155398483840bc0kagkc.jpg');
        height: 300px;
        "></div>
    <!-- Hintegrundbild -->

    <div class="card mx-4 mx-md-5 shadow-5-strong" style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
        ">
      <div class="card-body py-5 px-md-5">

        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <h2 class="fw-bold mb-5">Registriere dich jetzt</h2>
            <form>
              <!-- Vor und Nachname -->
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" />
                    <label class="form-label" for="form3Example1">Vorname</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" />
                    <label class="form-label" for="form3Example2">Nachname</label>
                  </div>
                </div>
              </div>

              <!-- Email  -->
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control" />
                <label class="form-label" for="form3Example3">Email Adresse</label>
              </div>

              <!-- Password  -->
              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" />
                <label class="form-label" for="form3Example4">Password</label>
              </div>
              <!-- Bestätigungs button -->
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Registrieren
              </button>
              <!-- Besitztt schon ein Account -->
              <div class="text-center">
                <p>
                  Du hast bereits einen Account?
                  <a href="/login">Anmelden</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
</script>
