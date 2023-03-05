-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2023 at 07:32 PM
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
-- Database: `eventsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `name` varchar(100) NOT NULL DEFAULT 'event',
  `id` bigint(254) NOT NULL,
  `start_time` time(6) DEFAULT NULL,
  `end_time` time(6) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `banner_image` varchar(255) DEFAULT NULL,
  `status` int(10) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`name`, `id`, `start_time`, `end_time`, `city`, `category`, `banner_image`, `status`, `date`, `description`) VALUES
('', 85, '00:00:00.000000', '00:00:00.000000', '', '', '', 0, '0000-00-00', ''),
('Test Event 1', 86, '01:53:00.000000', '04:56:00.000000', 'Ahmedabad', 'Musical', 'C:fakepathwallpaperflare.com_wallpaper (2).jpg', 1, '2023-03-06', 'This is the first test event.'),
('', 87, '00:00:00.000000', '00:00:00.000000', '', '', '', 0, '0000-00-00', ''),
('Test Event 2', 88, '01:55:00.000000', '08:58:00.000000', 'Jamnagar', 'Musical', 'C:fakepathwallpaperflare.com_wallpaper (5).jpg', 1, '2023-03-29', 'This is another test event.'),
('', 89, '00:00:00.000000', '00:00:00.000000', '', '', '', 0, '0000-00-00', ''),
('Test Event 3', 90, '12:12:00.000000', '11:01:00.000000', 'Gandhinagar', 'Business', 'C:fakepathwallpaperflare.com_wallpaper (1).jpg', 1, '1212-11-12', 'This is one more test event'),
('', 91, '00:00:00.000000', '00:00:00.000000', '', '', '', 0, '0000-00-00', ''),
('Test Event 4', 92, '10:10:00.000000', '12:12:00.000000', 'Ahmedabad', 'Exhibition', 'C:fakepathwallpaperflare.com_wallpaper (6).jpg', 1, '2121-11-12', 'This is the last one. Me tired');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` bigint(254) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
