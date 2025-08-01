document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('survey-form');
    const modal = document.getElementById('modal-success');
    const closeModalBtn = document.getElementById('close-modal');

    if (form && modal && closeModalBtn) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            modal.classList.add('modal-visible');
        });

        closeModalBtn.addEventListener('click', function () {
            modal.classList.remove('modal-visible');
        });
    } else {
        console.error('No se encontró el formulario o el modal en el DOM');
    }
});