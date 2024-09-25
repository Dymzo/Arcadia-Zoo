<?php
$plainPassword = 'motdepassecryptéjosé';
$hashedPassword = '$2y$10$/jlYvh0B4Zd0sCCBYHgAcOVKWOcQdZSUIyCHo4uFTB4WqAoU.pbPu'; // Utilisez un hash que vous savez être correct

if (password_verify($plainPassword, $hashedPassword)) {
    echo "Le mot de passe est correct.";
} else {
    echo "Le mot de passe est incorrect.";
}
?>
