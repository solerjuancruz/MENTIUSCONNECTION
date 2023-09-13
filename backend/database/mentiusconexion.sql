-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 08-08-2023 a las 14:04:24
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mentiusconexion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fijadigitals`
--

DROP TABLE IF EXISTS `fijadigitals`;
CREATE TABLE IF NOT EXISTS `fijadigitals` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `documento` bigint NOT NULL,
  `fexpedicion` date NOT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `departamento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `barrio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `estrato` bigint NOT NULL,
  `ngrabacion` bigint NOT NULL,
  `ncontacto` bigint NOT NULL,
  `producto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `segmento` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `FOX` int DEFAULT NULL,
  `HBO` int DEFAULT NULL,
  `cds_movil` int DEFAULT NULL,
  `cds_fija` int DEFAULT NULL,
  `Paquete_Adultos` int DEFAULT NULL,
  `Decodificador` int DEFAULT NULL,
  `Svas_lineas` int DEFAULT NULL,
  `velocidad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tecnologia` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `orden` bigint DEFAULT NULL,
  `selector` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `confronta` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observacion` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `agente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `revisados` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadorevisado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `backoffice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hora` time NOT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `patinador` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fijainbounds`
--

DROP TABLE IF EXISTS `fijainbounds`;
CREATE TABLE IF NOT EXISTS `fijainbounds` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `documento` bigint NOT NULL,
  `fexpedicion` date NOT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `departamento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `barrio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `estrato` bigint NOT NULL,
  `ngrabacion` bigint NOT NULL,
  `ncontacto` bigint NOT NULL,
  `producto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `segmento` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `FOX` int DEFAULT NULL,
  `HBO` int DEFAULT NULL,
  `cds_movil` int DEFAULT NULL,
  `cds_fija` int DEFAULT NULL,
  `Paquete_Adultos` int DEFAULT NULL,
  `Decodificador` int DEFAULT NULL,
  `Svas_lineas` int DEFAULT NULL,
  `velocidad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tecnologia` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `orden` bigint DEFAULT NULL,
  `selector` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `confronta` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observacion` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `agente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `revisados` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadorevisado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `backoffice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hora` time NOT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `patinador` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiempos`
--

DROP TABLE IF EXISTS `tiempos`;
CREATE TABLE IF NOT EXISTS `tiempos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `llave` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `nombre` varchar(150) COLLATE utf8mb4_spanish_ci NOT NULL,
  `cedula` bigint NOT NULL,
  `fecha` date NOT NULL,
  `ingreso` time NOT NULL,
  `salida` time DEFAULT NULL,
  `finturno` float DEFAULT NULL,
  `breakin` time DEFAULT NULL,
  `breakout` time DEFAULT NULL,
  `timebreak` float DEFAULT NULL,
  `almuerzo` time DEFAULT NULL,
  `almuerzoout` time DEFAULT NULL,
  `timelunch` float DEFAULT NULL,
  `capacitacion` time DEFAULT NULL,
  `capout` time DEFAULT NULL,
  `timecap` float DEFAULT NULL,
  `pausas` time DEFAULT NULL,
  `pausasout` time DEFAULT NULL,
  `timepausas` float DEFAULT NULL,
  `daño` time DEFAULT NULL,
  `dañoout` time DEFAULT NULL,
  `timedaño` float DEFAULT NULL,
  `evaluacion` time DEFAULT NULL,
  `evaluacionout` time DEFAULT NULL,
  `timeeva` float DEFAULT NULL,
  `retro` time DEFAULT NULL,
  `retroout` time DEFAULT NULL,
  `timeretro` float DEFAULT NULL,
  `reunion` time DEFAULT NULL,
  `reunionout` time DEFAULT NULL,
  `timereunion` float DEFAULT NULL,
  `baño` time DEFAULT NULL,
  `bañoout` time DEFAULT NULL,
  `timebaño` float DEFAULT NULL,
  `calamidad` time DEFAULT NULL,
  `calamidadout` time DEFAULT NULL,
  `timecalamidad` float DEFAULT NULL,
  `EmeMedica` time DEFAULT NULL,
  `EmeMedicaout` time DEFAULT NULL,
  `timeEmeMedica` float DEFAULT NULL,
  `total` text COLLATE utf8mb4_spanish_ci,
  `sede` varchar(150) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `equipo_entorno` varchar(150) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `latitude` varchar(150) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `longitude` varchar(150) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `tiempos`
--

INSERT INTO `tiempos` (`id`, `llave`, `nombre`, `cedula`, `fecha`, `ingreso`, `salida`, `finturno`, `breakin`, `breakout`, `timebreak`, `almuerzo`, `almuerzoout`, `timelunch`, `capacitacion`, `capout`, `timecap`, `pausas`, `pausasout`, `timepausas`, `daño`, `dañoout`, `timedaño`, `evaluacion`, `evaluacionout`, `timeeva`, `retro`, `retroout`, `timeretro`, `reunion`, `reunionout`, `timereunion`, `baño`, `bañoout`, `timebaño`, `calamidad`, `calamidadout`, `timecalamidad`, `EmeMedica`, `EmeMedicaout`, `timeEmeMedica`, `total`, `sede`, `equipo_entorno`, `latitude`, `longitude`, `created_at`, `updated_at`) VALUES
(8, 'llave1', 'antonio', 98765, '2023-08-07', '26:46:09', '00:00:00', 0, '00:00:00', '00:00:00', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-07 14:46:35', '2023-08-07 14:46:35'),
(9, 'llave', 'jesus', 1082411912, '2023-08-07', '09:52:45', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-07 14:52:45', '2023-08-07 14:52:45'),
(11, 'llave 2', 'jesus viana', 1082411912, '2023-08-07', '10:12:41', '13:17:52', NULL, '10:56:03', '11:18:42', 22, '11:31:18', '11:38:19', 7, '11:44:51', '11:47:15', 2, '11:54:19', '11:57:46', 3, '12:11:57', '12:16:11', 4, '12:24:50', '12:36:27', 11, '12:39:09', '12:41:14', 2, '12:44:47', '12:55:05', 10, '12:59:23', '12:59:38', 0, '13:03:32', '13:07:09', 3, '13:12:32', '13:13:45', 1, '3', NULL, NULL, NULL, NULL, '2023-08-07 15:12:41', '2023-08-07 18:17:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
