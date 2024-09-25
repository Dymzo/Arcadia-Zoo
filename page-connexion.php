<?php
session_start();
require 'database.php'; // Connexion à la base de données

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $role = ucfirst(strtolower($_POST['role'])); // Normalisation de la casse du rôle

    // Debugging
    echo "Username: $username<br>";
    echo "Role: $role<br>";

    // Rechercher l'utilisateur dans la base de données
    $stmt = $pdo->prepare("SELECT * FROM utilisateur WHERE username = :username");
    $stmt->execute(['username' => $username]);
    $user = $stmt->fetch();

    // Vérifier si l'utilisateur existe
    if (!$user) {
        echo "Utilisateur non trouvé.<br>";
    }

    // Rechercher le role_id à partir du label du rôle
    $stmtRole = $pdo->prepare("SELECT role_id FROM role WHERE label = :label");
    $stmtRole->execute(['label' => $role]);
    $roleData = $stmtRole->fetch();
    $role_id = $roleData ? $roleData['role_id'] : null;

    // Debugging
    echo "Role ID from database: $role_id<br>";
    if ($user) {
        echo "User Role ID: " . $user['role_id'] . "<br>";
    }

    // Vérifier le mot de passe et le rôle
    if ($user && password_verify($password, $user['password']) && $user['role_id'] == $role_id) {
        // Connexion réussie
        $_SESSION['username'] = $username;
        $_SESSION['role'] = $role;

        // Redirection selon le rôle
        if ($role === 'Administrateur') {
            echo "Redirecting to admin-dashboard.php<br>";
            header("Location: admin-dashboard.php"); // Page pour les administrateurs
        } else if ($role === 'Employé') {
            echo "Redirecting to employee-dashboard.php<br>";
            header("Location: employee-dashboard.php"); // Page pour les employés
        } else {
            echo "Redirecting to index.html<br>";
            header("Location: index.html"); // Page par défaut
        }
        exit();
    } else {
        echo "Nom d'utilisateur, mot de passe, ou rôle incorrect.<br>";
    }
}
?>
