-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2024 at 03:45 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `code_builders`
--

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_admission`
--

CREATE TABLE `cb_in_admission` (
  `admission_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(15) NOT NULL,
  `address_street` varchar(255) NOT NULL,
  `address_district` varchar(50) NOT NULL,
  `address_state` varchar(50) NOT NULL,
  `address_pincode` varchar(10) NOT NULL,
  `father_name` varchar(255) DEFAULT NULL,
  `mother_name` varchar(255) DEFAULT NULL,
  `father_phone_number` varchar(15) DEFAULT NULL,
  `mother_phone_number` varchar(15) DEFAULT NULL,
  `pic` text DEFAULT NULL,
  `sslc_percentage` decimal(5,2) DEFAULT NULL,
  `hsc_percentage` decimal(5,2) DEFAULT NULL,
  `diploma_percentage` decimal(5,2) DEFAULT NULL,
  `college_institution_name` varchar(255) DEFAULT NULL,
  `degree` varchar(50) DEFAULT NULL,
  `department` varchar(50) DEFAULT NULL,
  `current_year_of_college` varchar(10) DEFAULT NULL,
  `passed_out_year` int(11) DEFAULT NULL,
  `cgpa` decimal(5,2) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(20) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT 0,
  `dob` varchar(10) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address_locality` varchar(100) NOT NULL,
  `address_city` varchar(100) NOT NULL,
  `father_occupation` varchar(50) NOT NULL,
  `father_income` varchar(20) NOT NULL,
  `date_of_admission` varchar(10) NOT NULL,
  `remarks` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cb_in_admission`
--
ALTER TABLE `cb_in_admission`
  ADD PRIMARY KEY (`admission_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cb_in_admission`
--
ALTER TABLE `cb_in_admission`
  MODIFY `admission_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
