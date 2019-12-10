-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 08/12/2019 às 19:12
-- Versão do servidor: 10.2.27-MariaDB
-- Versão do PHP: 7.2.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `u980500698_ifreport`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `aviso`
--

CREATE TABLE `aviso` (
  `id` int(11) NOT NULL,
  `titulo` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mensagem` longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `usuario` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data_aviso` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `report`
--

CREATE TABLE `report` (
  `id` int(11) NOT NULL,
  `descricao` longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `classificacao` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `usuario` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data_report` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `report`
--

INSERT INTO `report` (`id`, `descricao`, `classificacao`, `usuario`, `data_report`) VALUES
(1, 'Tomada quebrada no laboratório 55', 'Sugestão', '20162094040002', '2019-12-08 03:14:37'),
(2, 'Teste de código', 'Sugestão', '20162094040002', '2019-12-08 16:11:38');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `aviso`
--
ALTER TABLE `aviso`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `report`
--
ALTER TABLE `report`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
