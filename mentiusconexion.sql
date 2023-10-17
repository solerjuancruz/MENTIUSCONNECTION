-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 13-09-2023 a las 04:44:23
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

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
-- Estructura de tabla para la tabla `cobertura`
--

DROP TABLE IF EXISTS `cobertura`;
CREATE TABLE IF NOT EXISTS `cobertura` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `departamento` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `ciudad` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `direccion` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `nomenclatura` varchar(191) COLLATE utf8mb4_general_ci NOT NULL,
  `numero_nomenclatura_uno` int NOT NULL,
  `letra_nomenclatura_uno` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nomenclatura_dos` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `numero_nomenclatura_dos` int NOT NULL,
  `letra_nomenclatura_dos` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `numero_nomenclatura_tres` int NOT NULL,
  `complemento_uno` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `complemento_dos` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `numero_complemento_uno` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `numero_complemento_dos` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cable` int NOT NULL,
  `hora` time DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cobertura`
--

INSERT INTO `cobertura` (`id`, `departamento`, `ciudad`, `direccion`, `nomenclatura`, `numero_nomenclatura_uno`, `letra_nomenclatura_uno`, `nomenclatura_dos`, `numero_nomenclatura_dos`, `letra_nomenclatura_dos`, `numero_nomenclatura_tres`, `complemento_uno`, `complemento_dos`, `numero_complemento_uno`, `numero_complemento_dos`, `cable`, `hora`, `dia`, `created_at`, `updated_at`) VALUES
(1, 'antioquia', 'medellin', 'calle 1 01 ', 'nomenclatura', 12, 'letra nomenclatura', 'nom 2', 2, 'letra nom', 3, 'ninguno', 'alguno', '13513', 'complemento 2', 874, NULL, NULL, NULL, NULL),
(2, 'Cundinamarca', 'Atlantico', 'Aliquip possimus ut', 'KR', 56, 'Quam ab ab molestiae', 'Urbanizacion', 100, 'Nisi aut ex est des', 72, 'LCA', 'TOR', 'Mollit quia odio sap', 'Enim optio ut quia', 9, '21:13:00', '2023-09-04', '2023-09-05 02:13:00', '2023-09-05 02:13:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `createplan`
--

DROP TABLE IF EXISTS `createplan`;
CREATE TABLE IF NOT EXISTS `createplan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `planadquiere` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `hora` time DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `createplan`
--

INSERT INTO `createplan` (`id`, `planadquiere`, `hora`, `dia`, `created_at`, `updated_at`) VALUES
(1, 'planadquiere', NULL, NULL, NULL, NULL),
(2, 'prueba', '20:39:03', '2023-09-04', '2023-09-05 01:39:03', '2023-09-05 01:39:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `hora` time DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `patinador` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `fijadigitals`
--

INSERT INTO `fijadigitals` (`id`, `nombres`, `documento`, `fexpedicion`, `correo`, `departamento`, `id_ciudad`, `barrio`, `direccion`, `estrato`, `ngrabacion`, `ncontacto`, `producto`, `segmento`, `FOX`, `HBO`, `cds_movil`, `cds_fija`, `Paquete_Adultos`, `Decodificador`, `Svas_lineas`, `velocidad`, `tecnologia`, `orden`, `selector`, `confronta`, `observacion`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`, `patinador`) VALUES
(25, 'datos editados', 29, '2004-05-07', 'Ratione ad et iure a', 'atlantico', 'bogota', 'Voluptas accusantium', 'Sapiente sapiente ut', 3, 2, 44, 'movistar', 'FijaDigital', NULL, NULL, 1, NULL, NULL, NULL, NULL, 'lento', 'portatil', 66, NULL, NULL, 'Non quidem aperiam m', 'FijaDigital', NULL, NULL, NULL, NULL, '19:43:40', '2023-09-12', '2023-09-10 17:16:04', '2023-09-13 00:43:40', NULL);

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `fijainbounds`
--

INSERT INTO `fijainbounds` (`id`, `nombres`, `documento`, `fexpedicion`, `correo`, `departamento`, `id_ciudad`, `barrio`, `direccion`, `estrato`, `ngrabacion`, `ncontacto`, `producto`, `segmento`, `FOX`, `HBO`, `cds_movil`, `cds_fija`, `Paquete_Adultos`, `Decodificador`, `Svas_lineas`, `velocidad`, `tecnologia`, `orden`, `selector`, `confronta`, `observacion`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`, `patinador`) VALUES
(2, 'inbound', 1511564, '2022-08-01', 'inbound@pruebas.com', 'bogota', '19', 'inbound', 'cra 01 #01 - 01', 2, 2, 2, 'inbound', 'digital', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'velocidad', 'tecnologia', 1135841, 'selector', NULL, 'observacion', 'cruz', NULL, NULL, NULL, NULL, '08:24:07', '2023-08-11', '2023-08-11 13:24:07', '2023-08-11 13:24:07', NULL),
(3, 'Sit voluptatem at vo', 7, '1972-10-09', 'Et tempore perferen', 'Cundinamarca', 'Manizales', 'Quis quia qui esse', 'Nihil quibusdam null', 1, 18, 54, 'Claro', 'Digital', 1, 1, NULL, NULL, 1, NULL, 1, 'rapido', 'movil', 60, NULL, NULL, 'Labore quis id quia', 'Digital', NULL, NULL, NULL, NULL, '09:36:47', '2023-08-11', '2023-08-11 14:36:47', '2023-08-11 14:36:47', NULL),
(4, 'inbound', 4, '1979-06-15', 'Quod in lorem eos vo', 'Cundinamarca', 'Bogota', 'Est nesciunt volupt', 'Veniam qui natus do', 2, 19, 27, 'Claro', 'INBOUND', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'lento', 'computador', 11, NULL, NULL, 'Non minus elit esse', 'INBOUND', NULL, NULL, NULL, NULL, '09:44:15', '2023-08-11', '2023-08-11 14:44:15', '2023-08-11 14:44:15', NULL),
(5, 'Ut adipisicing iste', 96, '2004-05-04', 'Sit ab in consequatu', 'Atlantico', 'Pereira', 'Aut voluptas enim ra', 'Voluptate vero unde', 2, 88, 98, 'Claro', 'INBOUND', 1, NULL, 1, 1, NULL, NULL, NULL, 'rapido', 'computador', 62, NULL, NULL, 'Aliquam in quaerat e', 'INBOUND', NULL, NULL, NULL, NULL, '10:20:18', '2023-08-11', '2023-08-11 15:20:18', '2023-08-11 15:20:18', NULL),
(6, 'Dolore perferendis c', 18, '2003-11-26', 'Ullamco accusamus nu', 'Atlantico', 'Pereira', 'Voluptatum omnis est', 'Labore sit alias qu', 2, 30, 42, 'Claro', 'INBOUND', NULL, NULL, 1, 1, NULL, NULL, 1, 'lento', 'computador', 31, NULL, NULL, 'Ullam veritatis susc', 'INBOUND', NULL, NULL, NULL, NULL, '12:06:30', '2023-08-27', '2023-08-27 17:06:30', '2023-08-27 17:06:30', NULL),
(7, 'Cupidatat pariatur', 36, '2003-05-10', 'Irure eveniet dicta', 'Cundinamarca', 'Manizales', 'Velit omnis voluptat', 'In fugiat ut non nem', 3, 85, 84, 'Movistar', 'INBOUND', 1, NULL, 1, 1, NULL, NULL, NULL, 'rapido', 'computador', 96, 'In labore rerum et t', NULL, 'Id adipisci facilis', 'INBOUND', NULL, NULL, NULL, NULL, '12:53:23', '2023-08-27', '2023-08-27 17:53:23', '2023-08-27 17:53:23', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fijateleventas`
--

DROP TABLE IF EXISTS `fijateleventas`;
CREATE TABLE IF NOT EXISTS `fijateleventas` (
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `fijateleventas`
--

INSERT INTO `fijateleventas` (`id`, `nombres`, `documento`, `fexpedicion`, `correo`, `departamento`, `id_ciudad`, `barrio`, `direccion`, `estrato`, `ngrabacion`, `ncontacto`, `producto`, `segmento`, `FOX`, `HBO`, `cds_movil`, `cds_fija`, `Paquete_Adultos`, `Decodificador`, `Svas_lineas`, `velocidad`, `tecnologia`, `orden`, `selector`, `confronta`, `observacion`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`, `patinador`) VALUES
(2, 'inbound', 1511564, '2022-08-01', 'inbound@pruebas.com', 'bogota', '19', 'inbound', 'cra 01 #01 - 01', 2, 2, 2, 'inbound', 'digital', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'velocidad', 'tecnologia', 1135841, 'selector', NULL, 'observacion', 'cruz', NULL, NULL, NULL, NULL, '08:24:07', '2023-08-11', '2023-08-11 13:24:07', '2023-08-11 13:24:07', NULL),
(3, 'Sit voluptatem at vo', 7, '1972-10-09', 'Et tempore perferen', 'Cundinamarca', 'Manizales', 'Quis quia qui esse', 'Nihil quibusdam null', 1, 18, 54, 'Claro', 'Digital', 1, 1, NULL, NULL, 1, NULL, 1, 'rapido', 'movil', 60, NULL, NULL, 'Labore quis id quia', 'Digital', NULL, NULL, NULL, NULL, '09:36:47', '2023-08-11', '2023-08-11 14:36:47', '2023-08-11 14:36:47', NULL),
(4, 'inbound', 4, '1979-06-15', 'Quod in lorem eos vo', 'Cundinamarca', 'Bogota', 'Est nesciunt volupt', 'Veniam qui natus do', 2, 19, 27, 'Claro', 'INBOUND', NULL, 1, NULL, NULL, NULL, NULL, NULL, 'lento', 'computador', 11, NULL, NULL, 'Non minus elit esse', 'INBOUND', NULL, NULL, NULL, NULL, '09:44:15', '2023-08-11', '2023-08-11 14:44:15', '2023-08-11 14:44:15', NULL),
(5, 'Ut adipisicing iste', 96, '2004-05-04', 'Sit ab in consequatu', 'Atlantico', 'Pereira', 'Aut voluptas enim ra', 'Voluptate vero unde', 2, 88, 98, 'Claro', 'INBOUND', 1, NULL, 1, 1, NULL, NULL, NULL, 'rapido', 'computador', 62, NULL, NULL, 'Aliquam in quaerat e', 'INBOUND', NULL, NULL, NULL, NULL, '10:20:18', '2023-08-11', '2023-08-11 15:20:18', '2023-08-11 15:20:18', NULL),
(6, 'televenta', 151154, '2022-08-01', 'inbound@pruebas.com', 'bogota', '19', 'inbound', 'cra 01 #01 - 01', 2, 2, 2, 'inbound', 'digital', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'velocidad', 'tecnologia', 1135841, 'selector', NULL, 'observacion', 'cruz', NULL, NULL, NULL, NULL, '23:30:59', '2023-08-22', '2023-08-23 04:30:59', '2023-08-23 04:30:59', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `linea_nuevas`
--

DROP TABLE IF EXISTS `linea_nuevas`;
CREATE TABLE IF NOT EXISTS `linea_nuevas` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` bigint NOT NULL,
  `documento` bigint NOT NULL,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `departamento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `barrio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipocliente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ncontacto` bigint NOT NULL,
  `selector` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ngrabacion` bigint NOT NULL,
  `orden` bigint NOT NULL,
  `confronta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observaciones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `agente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `revisados` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadorevisado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `backoffice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `hora` time NOT NULL,
  `dia` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `linea_nuevas`
--

INSERT INTO `linea_nuevas` (`id`, `numero`, `documento`, `nombres`, `apellidos`, `correo`, `departamento`, `id_ciudad`, `barrio`, `direccion`, `tipocliente`, `ncontacto`, `selector`, `ngrabacion`, `orden`, `confronta`, `observaciones`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `created_at`, `updated_at`, `hora`, `dia`) VALUES
(1, 13513, 1351236, 'jsoler', 'prueba', 'jsoler@prueba', 'cundinamarca', '31', 'prueba', 'prueba', 'prueba', 1324, 'klñdajsgjadg', 1234, 1324, 'klñajsdgihg', 'kjasiodghan', 'movistar', 'kaljdglakng', 'kajsdioasdg', NULL, NULL, NULL, NULL, '00:00:00', NULL),
(2, 1, 123515, 'pruebasmovistar', 'Velit consequat Aut', 'juansoler@mail.com', 'dep 2', 'ciudad 2', 'Voluptatum doloribus', 'Perspiciatis ut vel', 'cliente 2', 123512351, NULL, 12351235, 123512351, NULL, 'hadfha', 'movistar', NULL, NULL, NULL, NULL, '2023-09-03 03:17:34', '2023-09-03 03:17:34', '22:17:34', '2023-09-02'),
(3, 1, 12351231, 'pruebasmovistar', 'Velit consequat Aut', 'uajaj@mail.com', 'dep 2', 'ciudad 2', 'Alias optio ut et o', 'Tempora eos odit aut', 'cliente 2', 1312461, NULL, 123461236, 12613616, NULL, 'sdfjqadhaj', 'movistar', NULL, NULL, NULL, NULL, '2023-09-04 00:28:22', '2023-09-04 00:28:22', '19:28:22', '2023-09-03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
-- Estructura de tabla para la tabla `noticias`
--

DROP TABLE IF EXISTS `noticias`;
CREATE TABLE IF NOT EXISTS `noticias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `title` varchar(155) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `imagen` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `description`, `title`, `imagen`, `created_at`, `updated_at`) VALUES
(1, 'prueba', 'title', 'imagen', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'descriptionprueba', 'titleprueba', 'titleprueba', NULL, NULL),
(9, 'pruebaNoticias', 'title', 'imagen', '2023-08-24 01:58:49', '2023-08-24 01:58:49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `tokenable_type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
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
-- Estructura de tabla para la tabla `phoenixes`
--

DROP TABLE IF EXISTS `phoenixes`;
CREATE TABLE IF NOT EXISTS `phoenixes` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` bigint NOT NULL,
  `documento` bigint NOT NULL,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellidos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `departamento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `barrio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nip` bigint DEFAULT NULL,
  `tipocliente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ncontacto` bigint DEFAULT NULL,
  `planadquiere` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipoPagos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `modelo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ngrabacion` bigint DEFAULT NULL,
  `orden` bigint DEFAULT NULL,
  `EqComprado` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ComEquipo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ValEquipo` bigint DEFAULT NULL,
  `confronta` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observaciones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `selector` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `agente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revisados` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadorevisado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `backoffice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `phoenixes`
--

INSERT INTO `phoenixes` (`id`, `numero`, `documento`, `nombres`, `apellidos`, `correo`, `departamento`, `id_ciudad`, `barrio`, `direccion`, `nip`, `tipocliente`, `ncontacto`, `planadquiere`, `tipoPagos`, `modelo`, `ngrabacion`, `orden`, `EqComprado`, `ComEquipo`, `ValEquipo`, `confronta`, `observaciones`, `selector`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`) VALUES
(1, 7183974, 1325125, 'jaowle', 'apoiuroa', 'jalidsf@kakjdñioja.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 29, 61, 'Sit autem ducimus', 'Voluptates et incidi', 'Soluta facilis amet', 'dep 1', NULL, 'Enim id similique et', 'Sit eum deserunt nul', 46, 'Tipo de cliente', 58, 'tipoP', 'tipo pago 2', 'Modelos 1', 33, 62, 'Equipo comprado', 'Doloremque labore fu', 65, NULL, 'Ipsam quos voluptate', NULL, 'Phoenix', NULL, NULL, NULL, NULL, '22:23:23', '2023-09-03', '2023-09-04 03:23:23', '2023-09-04 03:23:23'),
(3, 88, 4, 'Pariatur Dolor cupi', 'Voluptas sequi labor', 'Quia eligendi quas d', 'dep 1', NULL, 'Provident neque nis', 'Alias optio aut cil', 65, 'Tipo de cliente', 38, 'tipo plan', 'Tipo Pago 1', 'Modelos 1', 85, 80, 'Xiaomi', 'Sit laboriosam exe', 66, NULL, 'Error quo ad hic con', NULL, 'Phoenix', NULL, NULL, NULL, NULL, '22:24:53', '2023-09-03', '2023-09-04 03:24:53', '2023-09-04 03:24:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `phoenixperdida`
--

DROP TABLE IF EXISTS `phoenixperdida`;
CREATE TABLE IF NOT EXISTS `phoenixperdida` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` bigint NOT NULL,
  `documento` bigint NOT NULL,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellidos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `departamento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `barrio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nip` bigint DEFAULT NULL,
  `tipocliente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ncontacto` bigint DEFAULT NULL,
  `planadquiere` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipoPagos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `modelo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ngrabacion` bigint DEFAULT NULL,
  `orden` bigint DEFAULT NULL,
  `confronta` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observaciones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `selector` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `agente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revisados` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadorevisado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `backoffice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `phoenixperdida`
--

INSERT INTO `phoenixperdida` (`id`, `numero`, `documento`, `nombres`, `apellidos`, `correo`, `departamento`, `id_ciudad`, `barrio`, `direccion`, `nip`, `tipocliente`, `ncontacto`, `planadquiere`, `tipoPagos`, `modelo`, `ngrabacion`, `orden`, `confronta`, `observaciones`, `selector`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`) VALUES
(1, 78274, 12355, 'jsoler', 'soler', 'jsoler@pruebas', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `portadigitals`
--

DROP TABLE IF EXISTS `portadigitals`;
CREATE TABLE IF NOT EXISTS `portadigitals` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` bigint NOT NULL,
  `documento` bigint NOT NULL,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `departamento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `barrio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nip` bigint NOT NULL,
  `tipocliente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `planadquiere` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `segmento` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `ncontacto` bigint NOT NULL,
  `imei` bigint NOT NULL,
  `fvc` date NOT NULL,
  `fentrega` date NOT NULL,
  `fexpedicion` date NOT NULL,
  `fnacimiento` date NOT NULL,
  `origen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngrabacion` bigint NOT NULL,
  `selector` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orden` bigint DEFAULT NULL,
  `confronta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observaciones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `agente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `revisados` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadorevisado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `backoffice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `portadigitals`
--

INSERT INTO `portadigitals` (`id`, `numero`, `documento`, `nombres`, `apellidos`, `correo`, `departamento`, `id_ciudad`, `barrio`, `direccion`, `nip`, `tipocliente`, `planadquiere`, `segmento`, `ncontacto`, `imei`, `fvc`, `fentrega`, `fexpedicion`, `fnacimiento`, `origen`, `ngrabacion`, `selector`, `orden`, `confronta`, `observaciones`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`) VALUES
(1, 21345, 5241654, 'asdasdas', 'asdasdasd', 'test@test.com', 'Antioquia', 'Amalfi', 'asdasd', 'asdas', 54335, 'Cliente No convergente', '3330', 'Inbound', 30065658, 2132, '2022-01-26', '2022-01-27', '2022-01-26', '2022-01-26', 'Virgin Mobile', 354135, 'null', 5435, 'uploads/5iN12kdallJvFGIqmWzADYpFWHugQJ1Hc1allvOB.png', 'dgsdg', '5599926234', 'ok', 'ok', 'dghfg', '5599926234', '10:03:36', '2022-01-25', NULL, '2022-01-25 15:06:10'),
(44, 7189735, 512351236, 'portaDigital', 'ALKSJDIAGJ', 'ÑKJAISF@AKLJSDF.COM', 'CUNDINAMARCA', 'BOGOTA', 'CODITO', 'ASKDJGAA', 3718, 'JAKSHDGAG', 'QJÑIÑEONG', NULL, 7193759817, 151235135, '2023-08-15', '2023-08-01', '2023-08-04', '2023-08-06', 'ÑIJIANDG', 1351235, NULL, NULL, NULL, 'AKJDIGMASDIJA', 'EPROIIOADG', NULL, NULL, NULL, NULL, '21:41:50', '2023-08-26', '2023-08-27 02:41:50', '2023-08-27 02:41:50'),
(45, 1202156, 475184, 'pruebasmovistar', 'lsorem', 'uajaj@mail.com', 'departamento 2', 'Ciudad 2', 'Voluptatum doloribus', 'Impedit nostrum ab', 18561, 'cliente', 'item 1', NULL, 168415634984, 65436841, '2023-08-02', '2023-09-05', '2023-08-28', '2023-08-06', 'lorem ipsum', 169456541, NULL, 1689464, NULL, 'mlñn', 'PORTADIGITAL', NULL, NULL, NULL, NULL, '13:14:27', '2023-08-27', '2023-08-27 18:14:27', '2023-08-27 18:14:27');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `portainbounds`
--

DROP TABLE IF EXISTS `portainbounds`;
CREATE TABLE IF NOT EXISTS `portainbounds` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` bigint NOT NULL,
  `documento` bigint NOT NULL,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `departamento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `barrio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nip` bigint NOT NULL,
  `tipocliente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `planadquiere` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `segmento` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `ncontacto` bigint NOT NULL,
  `imei` bigint NOT NULL,
  `fvc` date NOT NULL,
  `fentrega` date NOT NULL,
  `fexpedicion` date NOT NULL,
  `fnacimiento` date NOT NULL,
  `origen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngrabacion` bigint NOT NULL,
  `selector` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orden` bigint DEFAULT NULL,
  `confronta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observaciones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `agente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `revisados` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadorevisado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `backoffice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hora` time NOT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `portainbounds`
--

INSERT INTO `portainbounds` (`id`, `numero`, `documento`, `nombres`, `apellidos`, `correo`, `departamento`, `id_ciudad`, `barrio`, `direccion`, `nip`, `tipocliente`, `planadquiere`, `segmento`, `ncontacto`, `imei`, `fvc`, `fentrega`, `fexpedicion`, `fnacimiento`, `origen`, `ngrabacion`, `selector`, `orden`, `confronta`, `observaciones`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`) VALUES
(43, 7189735, 512351236, 'KAJÑSIDGJASG', 'ALKSJDIAGJ', 'ÑKJAISF@AKLJSDF.COM', 'CUNDINAMARCA', 'BOGOTA', 'CODITO', 'ASKDJGAA', 3718, 'JAKSHDGAG', 'QJÑIÑEONG', NULL, 7193759817, 151235135, '2023-08-15', '2023-08-01', '2023-08-04', '2023-08-06', 'ÑIJIANDG', 1351235, NULL, NULL, NULL, 'AKJDIGMASDIJA', 'EPROIIOADG', NULL, NULL, NULL, NULL, '00:00:00', NULL, NULL, NULL),
(44, 76, 97, 'Commodo in laboriosa', 'Totam sunt dignissim', 'Laborum Exercitatio', 'item 1', 'Ciudad 1', 'Soluta sit eum reru', 'Vero doloremque cupi', 27, 'value 2', 'lorem ipsum 3', NULL, 98, 14, '1998-07-18', '1977-02-16', '1970-02-18', '2013-09-19', 'item 2', 21, NULL, 63, NULL, 'Dolorem repellendus', 'PORTAINBOUND', NULL, NULL, NULL, NULL, '13:59:18', '2023-08-27', '2023-08-27 18:59:18', '2023-08-27 18:59:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `portateleventas`
--

DROP TABLE IF EXISTS `portateleventas`;
CREATE TABLE IF NOT EXISTS `portateleventas` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` bigint NOT NULL,
  `documento` bigint NOT NULL,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `departamento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `barrio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nip` bigint NOT NULL,
  `tipocliente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `planadquiere` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `segmento` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `ncontacto` bigint NOT NULL,
  `imei` bigint NOT NULL,
  `fvc` date NOT NULL,
  `fentrega` date NOT NULL,
  `fexpedicion` date NOT NULL,
  `fnacimiento` date NOT NULL,
  `origen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngrabacion` bigint NOT NULL,
  `selector` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orden` bigint DEFAULT NULL,
  `confronta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `likewize` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observaciones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `agente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `revisados` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadorevisado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `backoffice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hora` time NOT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `portateleventas`
--

INSERT INTO `portateleventas` (`id`, `numero`, `documento`, `nombres`, `apellidos`, `correo`, `departamento`, `id_ciudad`, `barrio`, `direccion`, `nip`, `tipocliente`, `planadquiere`, `segmento`, `ncontacto`, `imei`, `fvc`, `fentrega`, `fexpedicion`, `fnacimiento`, `origen`, `ngrabacion`, `selector`, `orden`, `confronta`, `likewize`, `observaciones`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`) VALUES
(43, 7189735, 512351236, 'KAJÑSIDGJASG', 'ALKSJDIAGJ', 'ÑKJAISF@AKLJSDF.COM', 'CUNDINAMARCA', 'BOGOTA', 'CODITO', 'ASKDJGAA', 3718, 'JAKSHDGAG', 'QJÑIÑEONG', NULL, 7193759817, 151235135, '2023-08-15', '2023-08-01', '2023-08-04', '2023-08-06', 'ÑIJIANDG', 1351235, NULL, NULL, NULL, NULL, 'AKJDIGMASDIJA', 'EPROIIOADG', NULL, NULL, NULL, NULL, '00:00:00', NULL, NULL, NULL),
(44, 7189735, 512351236, 'nuevo', 'ALKSJDIAGJ', 'ÑKJAISF@AKLJSDF.COM', 'CUNDINAMARCA', 'BOGOTA', 'CODITO', 'ASKDJGAA', 3718, 'JAKSHDGAG', 'QJÑIÑEONG', NULL, 7193759817, 151235135, '2023-08-15', '2023-08-01', '2023-08-04', '2023-08-06', 'ÑIJIANDG', 1351235, NULL, NULL, NULL, NULL, 'AKJDIGMASDIJA', 'EPROIIOADG', NULL, NULL, NULL, NULL, '14:24:23', '2023-08-27', '2023-08-27 19:24:23', '2023-08-27 19:24:23'),
(45, 7189735, 512351236, 'KAJÑSIDGJASG', 'ALKSJDIAGJ', 'ÑKJAISF@AKLJSDF.COM', 'CUNDINAMARCA', 'BOGOTA', 'CODITO', 'ASKDJGAA', 3718, 'JAKSHDGAG', 'QJÑIÑEONG', NULL, 7193759817, 151235135, '2023-08-15', '2023-08-01', '2023-08-04', '2023-08-06', 'ÑIJIANDG', 1351235, NULL, NULL, NULL, NULL, 'AKJDIGMASDIJA', 'EPROIIOADG', NULL, NULL, NULL, NULL, '15:15:02', '2023-08-27', '2023-08-27 20:15:02', '2023-08-27 20:15:02'),
(46, 12021, 10254894, 'pruebasmovistar', 'Velit consequat Aut', 'juansoler@mail.com', 'item 2', 'Ciudad 2', 'Alias optio ut et o', 'Est officia soluta q', 1035181, 'cliente 3', 'plan adq 3', NULL, 21841681, 3521849684, '2023-08-15', '2023-08-23', '2023-09-01', '2023-09-05', 'origen 2', 516841, NULL, 56186410, NULL, NULL, 'jghliufhvg', 'PORTADIGITAL', NULL, NULL, NULL, NULL, '15:24:20', '2023-08-27', '2023-08-27 20:24:20', '2023-08-27 20:24:20'),
(47, 12021, 10254894, 'pruebasmovistar', 'Velit consequat Aut', 'juansoler@mail.com', 'item 2', 'Ciudad 2', 'Alias optio ut et o', 'Est officia soluta q', 1035181, 'cliente 3', 'plan adq 3', NULL, 21841681, 3521849684, '2023-08-15', '2023-08-23', '2023-09-01', '2023-09-05', 'origen 2', 516841, NULL, 56186410, NULL, NULL, 'jghliufhvg', 'PORTADIGITAL', NULL, NULL, NULL, NULL, '15:24:47', '2023-08-27', '2023-08-27 20:24:47', '2023-08-27 20:24:47');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prepostdigitals`
--

DROP TABLE IF EXISTS `prepostdigitals`;
CREATE TABLE IF NOT EXISTS `prepostdigitals` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` bigint NOT NULL,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `documento` bigint NOT NULL DEFAULT '0',
  `fexpedicion` date NOT NULL,
  `tipocliente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `departamento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `barrio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `corte` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `planventa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `segmento` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `activacion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `numero_grabacion` bigint DEFAULT NULL,
  `confronta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `token` bigint NOT NULL,
  `selector` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orden` bigint DEFAULT NULL,
  `observaciones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `agente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `revisados` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadorevisado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `backoffice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hora` time NOT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `prepostdigitals`
--

INSERT INTO `prepostdigitals` (`id`, `numero`, `nombres`, `documento`, `fexpedicion`, `tipocliente`, `correo`, `departamento`, `id_ciudad`, `barrio`, `direccion`, `corte`, `planventa`, `segmento`, `activacion`, `numero_grabacion`, `confronta`, `token`, `selector`, `orden`, `observaciones`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`) VALUES
(1, 78274, 'hauient', 9840, '2023-08-15', 'kJSDJA', 'JALIUDF@KAJÑSDIG', 'CUDNIF', 'BODODO', 'ELSJD', 'CKEIAGA', '1235', 'KGJÑAISDG ', NULL, 'SI', NULL, NULL, 1703975091, NULL, NULL, 'NIN', 'PREOIAN', NULL, NULL, NULL, NULL, '00:00:00', NULL, NULL, NULL),
(2, 78274, 'pruebas', 9840, '2023-08-15', 'kJSDJA', 'JALIUDF@KAJÑSDIG', 'CUDNIF', 'Bogota', 'ninguno', 'CKEIAGA', '1235', 'KGJÑAISDG', NULL, 'SI', NULL, NULL, 1703975091, NULL, NULL, 'NIN', 'PREOIAN', NULL, NULL, NULL, NULL, '19:45:48', '2023-08-29', '2023-08-30 00:45:48', '2023-08-30 00:45:48'),
(3, 132512351, 'pruebasmovistar', 1351235125, '2023-07-31', 'cliente 2', 'juansoler@mail.com', 'dep 2', 'ciudad 2', 'Alias optio ut et o', 'Tempora eos odit aut', '2', 'venta 2', 'prepostDigital', 'activacion 2', 12, NULL, 123, NULL, 123, 'dfhsdfnsdf', 'prepostDigital', NULL, NULL, NULL, NULL, '21:28:59', '2023-08-29', '2023-08-30 02:28:59', '2023-08-30 02:28:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preposteleventas`
--

DROP TABLE IF EXISTS `preposteleventas`;
CREATE TABLE IF NOT EXISTS `preposteleventas` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` bigint NOT NULL,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `documento` bigint NOT NULL DEFAULT '0',
  `fexpedicion` date NOT NULL,
  `tipocliente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `departamento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `barrio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `corte` int NOT NULL,
  `planventa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `segmento` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `activacion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `confronta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `token` int NOT NULL,
  `selector` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orden` bigint DEFAULT NULL,
  `observaciones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `agente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `revisados` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadorevisado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `backoffice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hora` time NOT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `preposteleventas`
--

INSERT INTO `preposteleventas` (`id`, `numero`, `nombres`, `documento`, `fexpedicion`, `tipocliente`, `correo`, `departamento`, `id_ciudad`, `barrio`, `direccion`, `corte`, `planventa`, `segmento`, `activacion`, `confronta`, `token`, `selector`, `orden`, `observaciones`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`) VALUES
(1, 78274, 'hauient', 9840, '2023-08-15', 'kJSDJA', 'JALIUDF@KAJÑSDIG', 'CUDNIF', 'BODODO', 'ELSJD', 'CKEIAGA', 1235, 'KGJÑAISDG ', NULL, 'SI', NULL, 1703975091, NULL, NULL, 'NIN', 'PREOIAN', NULL, NULL, NULL, NULL, '00:00:00', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prepostinbounds`
--

DROP TABLE IF EXISTS `prepostinbounds`;
CREATE TABLE IF NOT EXISTS `prepostinbounds` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` bigint NOT NULL,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `documento` bigint NOT NULL DEFAULT '0',
  `fexpedicion` date NOT NULL,
  `tipocliente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `departamento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `barrio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `corte` int NOT NULL,
  `planventa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `segmento` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `activacion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `confronta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `token` int NOT NULL,
  `selector` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orden` bigint DEFAULT NULL,
  `observaciones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `agente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `revisados` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadorevisado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `backoffice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hora` time NOT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `prepostinbounds`
--

INSERT INTO `prepostinbounds` (`id`, `numero`, `nombres`, `documento`, `fexpedicion`, `tipocliente`, `correo`, `departamento`, `id_ciudad`, `barrio`, `direccion`, `corte`, `planventa`, `segmento`, `activacion`, `confronta`, `token`, `selector`, `orden`, `observaciones`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`) VALUES
(1, 78274, 'hauient', 9840, '2023-08-15', 'kJSDJA', 'JALIUDF@KAJÑSDIG', 'CUDNIF', 'BODODO', 'ELSJD', 'CKEIAGA', 1235, 'KGJÑAISDG ', NULL, 'SI', NULL, 1703975091, NULL, NULL, 'NIN', 'PREOIAN', NULL, NULL, NULL, NULL, '00:00:00', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preposts`
--

DROP TABLE IF EXISTS `preposts`;
CREATE TABLE IF NOT EXISTS `preposts` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` bigint NOT NULL,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `documento` bigint NOT NULL,
  `fexpedicion` date NOT NULL,
  `tipocliente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `departamento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `barrio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `corte` int NOT NULL,
  `planventa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `activacion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` int NOT NULL,
  `confronta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `orden` bigint NOT NULL,
  `observaciones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `agente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revisados` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadorevisado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `backoffice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hora` time NOT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rechazos`
--

DROP TABLE IF EXISTS `rechazos`;
CREATE TABLE IF NOT EXISTS `rechazos` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero_de_celular` bigint DEFAULT NULL,
  `nombres` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,
  `documento` bigint NOT NULL,
  `causal` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,
  `linea` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `departamento` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_ciudad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `claro` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tigo` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `directv` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `wow` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `barrio` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `otros` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `modalidad` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `frechazo` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `imgrechazo` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observacion` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `hora` time NOT NULL,
  `dia` date DEFAULT NULL,
  `agente` varchar(255) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `rechazos`
--

INSERT INTO `rechazos` (`id`, `numero_de_celular`, `nombres`, `documento`, `causal`, `linea`, `departamento`, `id_ciudad`, `claro`, `tigo`, `directv`, `wow`, `barrio`, `otros`, `modalidad`, `frechazo`, `imgrechazo`, `observacion`, `hora`, `dia`, `agente`, `created_at`, `updated_at`) VALUES
(1, 172395715, 'jsoler', 1325125, 'dfhsdfhsdfh', 'prueba', 'cundinamarca', 'bogota', NULL, NULL, NULL, NULL, NULL, NULL, 'virtual', 'kalsjdigansdg', NULL, 'n/a', '00:00:00', NULL, 'rechazos', NULL, NULL),
(2, 172395715, 'prueba', 1325125, 'dfhsdfhsdfh', 'pruebarechazo', 'cundinamarca', 'bogota', NULL, NULL, NULL, NULL, NULL, NULL, 'virtual', 'kalsjdigansdg', NULL, 'n/a', '21:32:11', '2023-09-02', 'rechazos', '2023-09-03 02:32:11', '2023-09-03 02:32:11'),
(3, 20, 'Velit libero blandi', 87, 'Rechazo1', 'Linea1', 'Dep1', 'Ciudad2', NULL, NULL, NULL, '1', NULL, NULL, 'Rechazos', '2018-08-06', NULL, 'Sit totam atque et', '21:47:14', '2023-09-02', 'Rechazos', '2023-09-03 02:47:14', '2023-09-03 02:47:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiempos`
--

DROP TABLE IF EXISTS `tiempos`;
CREATE TABLE IF NOT EXISTS `tiempos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `llave` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `nombre` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
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
  `total` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci,
  `sede` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `equipo_entorno` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `latitude` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `longitude` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `tiempos`
--

INSERT INTO `tiempos` (`id`, `llave`, `nombre`, `cedula`, `fecha`, `ingreso`, `salida`, `finturno`, `breakin`, `breakout`, `timebreak`, `almuerzo`, `almuerzoout`, `timelunch`, `capacitacion`, `capout`, `timecap`, `pausas`, `pausasout`, `timepausas`, `daño`, `dañoout`, `timedaño`, `evaluacion`, `evaluacionout`, `timeeva`, `retro`, `retroout`, `timeretro`, `reunion`, `reunionout`, `timereunion`, `baño`, `bañoout`, `timebaño`, `calamidad`, `calamidadout`, `timecalamidad`, `EmeMedica`, `EmeMedicaout`, `timeEmeMedica`, `total`, `sede`, `equipo_entorno`, `latitude`, `longitude`, `created_at`, `updated_at`) VALUES
(8, 'llave1', 'antonio', 98765, '2023-08-07', '26:46:09', '00:00:00', 0, '00:00:00', '00:00:00', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-07 14:46:35', '2023-08-07 14:46:35'),
(9, 'llave', 'jesus', 1082411912, '2023-08-07', '09:52:45', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '14:49:06', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-08-07 14:52:45', '2023-08-09 19:49:06'),
(11, 'llave 2', 'jesus viana', 1082411912, '2023-08-07', '10:12:41', '13:17:52', NULL, '10:56:03', '11:18:42', 22, '11:31:18', '11:38:19', 7, '11:44:51', '11:47:15', 2, '11:54:19', '11:57:46', 3, '12:11:57', '12:16:11', 4, '12:24:50', '12:36:27', 11, '12:39:09', '12:41:14', 2, '12:44:47', '12:55:05', 10, '12:59:23', '12:59:38', 0, '13:03:32', '13:07:09', 3, '13:12:32', '13:13:45', 1, '3', NULL, NULL, NULL, NULL, '2023-08-07 15:12:41', '2023-08-07 18:17:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `upgradedigitals`
--

DROP TABLE IF EXISTS `upgradedigitals`;
CREATE TABLE IF NOT EXISTS `upgradedigitals` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` bigint NOT NULL,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `documento` bigint NOT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fventa` date NOT NULL,
  `corte` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `selector` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `planhistorico` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `planventa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `segmento` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `activacion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngrabacion` bigint NOT NULL,
  `confronta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orden` bigint DEFAULT NULL,
  `observacion` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `agente` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `revisados` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estadorevisado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `obs2` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `backoffice` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `upgradedigitals`
--

INSERT INTO `upgradedigitals` (`id`, `numero`, `nombres`, `documento`, `correo`, `fventa`, `corte`, `selector`, `planhistorico`, `planventa`, `segmento`, `activacion`, `ngrabacion`, `confronta`, `orden`, `observacion`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`) VALUES
(2, 73572, 'digitalupgrade', 1235161, 'kjlñaiuñsdgn@ñkajsdig', '2023-08-09', '1783', NULL, 'paiga', 'mocs', NULL, 'si', 61431, NULL, NULL, 'nonf', 'pepo', NULL, NULL, NULL, NULL, '19:35:36', '2023-08-27', '2023-08-28 00:35:36', '2023-08-28 00:35:36'),
(3, 73572, 'digitalupgrade', 1235161, 'kjlñaiuñsdgn@ñkajsdig', '2023-08-09', '1783', NULL, 'paiga', 'mocs', NULL, 'si', 61431, NULL, NULL, 'nonf', 'pepo', NULL, NULL, NULL, NULL, '18:56:20', '2023-08-28', '2023-08-28 23:56:20', '2023-08-28 23:56:20'),
(4, 1235131, 'pruebasmovistar', 116, 'uajaj@mail.com', '2023-08-07', NULL, NULL, 'historico 2', 'venta 2', 'upgradeDigital', 'activacion 2', 123512, NULL, 1235125, 'skdlgjasdiogjasg', 'upgradeDigital', NULL, NULL, NULL, NULL, '22:05:20', '2023-08-28', '2023-08-29 03:05:20', '2023-08-29 03:05:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `upgradeinbounds`
--

DROP TABLE IF EXISTS `upgradeinbounds`;
CREATE TABLE IF NOT EXISTS `upgradeinbounds` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` bigint NOT NULL,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `documento` bigint NOT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fventa` date NOT NULL,
  `corte` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `selector` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `planhistorico` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `planventa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `segmento` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `activacion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngrabacion` bigint NOT NULL,
  `confronta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orden` bigint DEFAULT NULL,
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `upgradeinbounds`
--

INSERT INTO `upgradeinbounds` (`id`, `numero`, `nombres`, `documento`, `correo`, `fventa`, `corte`, `selector`, `planhistorico`, `planventa`, `segmento`, `activacion`, `ngrabacion`, `confronta`, `orden`, `observacion`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`) VALUES
(1, 73572, 'jañoisdgn', 1235161, 'kjlñaiuñsdgn@ñkajsdig', '2023-08-09', '1783', NULL, 'paiga', 'mocs', NULL, 'si', 61431, NULL, NULL, 'nonf', 'pepo', NULL, NULL, NULL, NULL, '00:00:00', NULL, NULL, NULL),
(2, 73572, 'inboundupgrade', 1235161, 'kjlñaiuñsdgn@ñkajsdig', '2023-08-09', '1783', NULL, 'paiga', 'mocs', NULL, 'si', 61431, NULL, NULL, 'nonf', 'pepo', NULL, NULL, NULL, NULL, '20:52:52', '2023-08-28', '2023-08-29 01:52:52', '2023-08-29 01:52:52'),
(3, 62, 'Sed animi magni nis', 86, 'Laboris nobis dolore', '1972-09-12', 'corte 1', NULL, 'historico', 'venta', NULL, 'activacion', 36, NULL, 48, 'Dignissimos doloremq', 'upgradeInbound', NULL, NULL, NULL, NULL, '21:52:10', '2023-08-28', '2023-08-29 02:52:10', '2023-08-29 02:52:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `upgradeteleventas`
--

DROP TABLE IF EXISTS `upgradeteleventas`;
CREATE TABLE IF NOT EXISTS `upgradeteleventas` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `numero` bigint NOT NULL,
  `nombres` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `documento` bigint NOT NULL,
  `correo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fventa` date NOT NULL,
  `corte` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `selector` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `planhistorico` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `planventa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `segmento` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `activacion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngrabacion` bigint NOT NULL,
  `confronta` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orden` bigint DEFAULT NULL,
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `upgradeteleventas`
--

INSERT INTO `upgradeteleventas` (`id`, `numero`, `nombres`, `documento`, `correo`, `fventa`, `corte`, `selector`, `planhistorico`, `planventa`, `segmento`, `activacion`, `ngrabacion`, `confronta`, `orden`, `observacion`, `agente`, `revisados`, `estadorevisado`, `obs2`, `backoffice`, `hora`, `dia`, `created_at`, `updated_at`) VALUES
(1, 73572, 'jañoisdgn', 1235161, 'kjlñaiuñsdgn@ñkajsdig', '2023-08-09', '1783', NULL, 'paiga', 'mocs', NULL, 'si', 61431, NULL, NULL, 'nonf', 'pepo', NULL, NULL, NULL, NULL, '00:00:00', NULL, NULL, NULL),
(2, 7357, 'dato2upgradeteleventa', 123561, 'kjlñaiuñsdgn@ñkajsdig', '2023-08-09', '1783', NULL, 'paiga', 'mocs', NULL, 'si', 61431, NULL, NULL, 'nonf', 'pepo', NULL, NULL, NULL, NULL, '23:06:20', '2023-08-24', '2023-08-25 04:06:20', '2023-08-25 04:06:20'),
(3, 1345125, 'pruebasmovistar', 12351, 'uajaj@mail.com', '2023-08-02', 'corte', NULL, 'historico', 'venta', 'upgradeTeleventas', 'Activacion', 4123412531, NULL, 12314234, 'rhsdryarh', 'upgradeTeleventas', NULL, NULL, NULL, NULL, '22:20:50', '2023-08-28', '2023-08-29 03:20:50', '2023-08-29 03:20:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
