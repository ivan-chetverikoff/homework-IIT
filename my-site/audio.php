<?php include 'header.php'; ?>

<div class="content">
    <h2>🎵 Аудио материалы</h2>
    
    <div class="audio-container">
        <audio controls>
            <source src="assets/audio/sample.mp3" type="audio/mp3">
            Ваш браузер не поддерживает аудио тег.
        </audio>
        <p class="audio-title">Пример аудио дорожки</p>
    </div>
    
    <?php
    $playlist = [
        ['title' => 'Трек 1', 'duration' => '3:45'],
        ['title' => 'Трек 2', 'duration' => '4:20'],
        ['title' => 'Трек 3', 'duration' => '2:55']
    ];
    ?>
    
    <div class="playlist">
        <h3>Плейлист:</h3>
        <ul>
            <?php foreach ($playlist as $track): ?>
                <li><?php echo $track['title']; ?> - <?php echo $track['duration']; ?></li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>

<?php include 'footer.php'; ?>