<?php include 'header.php'; ?>

<div class="content">
    <h2>📷 Фотогалерея</h2>
    
    <div class="gallery">
        <?php
        $images = ['nature.jpg', 'city.jpg', 'tech.jpg'];
        foreach ($images as $image) {
            echo '<div class="photo-item">';
            echo '<img src="assets/images/' . $image . '" alt="' . $image . '">';
            echo '<p>Описание фото: ' . pathinfo($image, PATHINFO_FILENAME) . '</p>';
            echo '</div>';
        }
        ?>
    </div>
    
    <p>Всего фотографий: <?php echo count($images); ?></p>
</div>

<?php include 'footer.php'; ?>