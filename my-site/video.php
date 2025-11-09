<?php include 'header.php'; ?>

<div class="content">
    <h2>🎥 Видео контент</h2>
    
    <div class="video-container">
        <video controls width="600">
            <source src="assets/videos/sample.mp4" type="video/mp4">
            Ваш браузер не поддерживает видео тег.
        </video>
        <p class="video-description">Пример видео контента</p>
    </div>
    
    <?php
    $videoInfo = [
        'format' => 'MP4',
        'duration' => '2:30',
        'size' => '15MB'
    ];
    ?>
    
    <div class="video-info">
        <h3>Информация о видео:</h3>
        <ul>
            <?php foreach ($videoInfo as $key => $value): ?>
                <li><strong><?php echo ucfirst($key); ?>:</strong> <?php echo $value; ?></li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>

<?php include 'footer.php'; ?>