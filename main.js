// Function to toggle the visibility of the all-photos section
function toggleAllPhotos() {
    const allPhotosDiv = document.getElementById('all-photos');
    if (allPhotosDiv.classList.contains('hidden')) {
        allPhotosDiv.classList.remove('hidden');
    } else {
        allPhotosDiv.classList.add('hidden');
    }
}