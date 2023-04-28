-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2023 at 02:56 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notes`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(15) NOT NULL,
  `note` varchar(500) NOT NULL,
  `notehead` varchar(250) NOT NULL,
  `username` varchar(250) NOT NULL,
  `created_at` varchar(250) NOT NULL DEFAULT current_timestamp(),
  `updated_at` varchar(250) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `note`, `notehead`, `username`, `created_at`, `updated_at`) VALUES
(56, 'This is my first note', 'Hii Everyone', 'admin', '2023-04-28 18:21:23', '2023-04-28 18:21:23'),
(57, 'I created this assignment using React Js a front end and Used MySql as database but to connect them both i used node js and created rest api for the basic crud\n', 'The assignment', 'admin', '2023-04-28 18:23:29', '2023-04-28 18:23:29'),
(58, 'The notes can be segregated user-wise but for now the user account creation and login is commented or we can say not written', 'The users and database', 'admin', '2023-04-28 18:24:33', '2023-04-28 18:24:33'),
(59, 'Since 2009, we have been on a journey of adventures with the world\'s top companies, searching for technological expertise. We\'ve solved some of the most complex problems and delivered change that matters.\n\n', 'IWCN', 'admin', '2023-04-28 18:25:13', '2023-04-28 18:25:13'),
(60, 'With over a decade-long experience, we\'ve helped tons of businesses and bolstered their digital presence.\nWe Are Committed to Diversity and Inclusion and adding people from different backgrounds, ideas, and points of view to create a diversified workforce environment. Get an essence of how everyone works at IWCN.', 'Happy working', 'admin', '2023-04-28 18:25:34', '2023-04-28 18:25:34');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', 'admin'),
(3, 'admin1', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
