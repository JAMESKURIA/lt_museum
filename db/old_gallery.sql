
--
-- Dumping data for table `ARTISTS`
--

INSERT INTO `artists` (`artist_id`, `artist_name`, `artist_address`, `artist_contact`) VALUES
(1, 'Duncan Schuster', '{\"city\": \"Haneview\", \"street_name\": \"Boehm Crescent\", \"street_address\": \"5508 Zb', '+501 370.528.2307'),
(2, 'Earnest Schiller', '{\"city\": \"East Lupe\", \"street_name\": \"Darrin Plaza\", \"street_address\": \"52914 An', '+84 352-465-6147 x92'),
(3, 'Jackson Larkin', '{\"city\": \"Port Barbar\", \"street_name\": \"Elton Rapids\", \"street_address\": \"30468 ', '+235 1-445-329-8654 '),
(4, 'Marcela Moen', '{\"city\": \"East Rhettshire\", \"street_name\": \"Schaden Meadow\", \"street_address\": \"', '+60 (248) 999-5150 x'),
(5, 'Shalanda Kiehn', '{\"city\": \"Mercedezhaven\", \"street_name\": \"Barton Crest\", \"street_address\": \"986 ', '+247 (125) 258-8735 '),
(6, 'Valerie Gleichner', '{\"city\": \"North Elenefort\", \"street_name\": \"Blair Throughway\", \"street_address\":', '+599 923-888-2779 x7'),
(7, 'Quinton Hoppe', '{\"city\": \"Schimmelmouth\", \"street_name\": \"Cronin Pines\", \"street_address\": \"2000', '+218 (530) 427-7677 '),
(8, 'Dalila Waelchi', '{\"city\": \"Nataliebury\", \"street_name\": \"Jenette Prairie\", \"street_address\": \"348', '+84 1-704-061-3382 x'),
(9, 'Melvina Hirthe', '{\"city\": \"North Reynaldotown\", \"street_name\": \"Byron Stream\", \"street_address\": ', '+269 424.380.1206 x7'),
(10, 'Floyd Deckow', '{\"city\": \"Port Blairmouth\", \"street_name\": \"Joel Roads\", \"street_address\": \"5149', '+961 1-949-180-8409 '),
(11, 'Tifany Ortiz', '{\"city\": \"Richardchester\", \"street_name\": \"Rath Highway\", \"street_address\": \"933', '+44 468-003-3517 x05'),
(12, 'Antonio Friesen', '{\"city\": \"Darronville\", \"street_name\": \"Jenette Ports\", \"street_address\": \"6874 ', '+672 755.438.6182 x1'),
(13, 'Pete Purdy', '{\"city\": \"Prohaskafort\", \"street_name\": \"Leonard Keys\", \"street_address\": \"236 O', '+504 290-104-4442 x8'),
(14, 'Latricia Hettinger', '{\"city\": \"East Delburgh\", \"street_name\": \"Major Ville\", \"street_address\": \"4589 ', '+95 1-984-908-5565 x'),
(15, 'Deetta Rowe', '{\"city\": \"West Wally\", \"street_name\": \"Watsica Island\", \"street_address\": \"524 E', '+1-876 673.041.9080 ');

-- --------------------------------------------------------



INSERT INTO `arts` (`art_id`, `art_name`, `art_artist_id`, `art_type_id`, `art_for`, `art_image`, `art_price`) VALUES
(1, 'Monalisa', 1, 1, 'view', 'image1.jpg', '4000'),
(2, 'Monalisa', 2, 2, 'sale', 'image2.jpg', '4000'),
(3, 'Monalisa', 3, 3, 'view', 'image3.jpg', '4000'),
(4, 'Monalisa', 4, 4, 'sale', 'image4.jpg', '4000'),
(5, 'Monalisa', 5, 5, 'view', 'image5.jpg', '4000'),
(6, 'Monalisa', 6, 1, 'sale', 'image6.jpg', '4000'),
(7, 'Monalisa', 7, 6, 'view', 'image7.jpg', '4000'),
(8, 'Monalisa', 8, 1, 'sale', 'image8.jpg', '4000'),
(9, 'Monalisa', 9, 5, 'view', 'image9.jpg', '4000'),
(10, 'Monalisa', 10, 6, 'sale', 'image10.jpg', '4000'),
(11, 'Monalisa', 11, 4, 'view', 'image11.jpg', '4000'),
(12, 'Monalisa', 12, 3, 'view', 'image12.jpg', '4000'),
(13, 'Monalisa', 13, 2, 'sale', 'image13.jpg', '4000'),
(14, 'Monalisa', 14, 7, 'view', 'image14.jpg', '4000'),
(15, 'Monalisa', 15, 7, 'sale', 'image15.jpg', '4000'),
(16, 'Monalisa', 1, 1, 'view', 'image16.jpg', '4000'),
(17, 'Monalisa', 3, 2, 'view', 'monalisa.jpg', '4000');

-- --------------------------------------------------------

INSERT INTO `art_types` (`type_id`, `type_name`) VALUES
(1, 'Realism'),
(2, 'Painterly'),
(3, 'Impressionism'),
(4, 'Expressionism and Fauvism'),
(5, 'Abstraction'),
(6, 'Abstract'),
(7, 'Photorealism');


INSERT INTO `bookings` (`booking_id`, `booking_art_id`, `booking_viewing_date`, `booking_tickets_available`, `booking_tickets_sold`) VALUES
(1, 1, '2021-11-07 17:58:52', 12, 35),
(2, 12, '2021-11-07 17:58:52', 35, 35);


INSERT INTO `USERS` (`USER_ID`, `USER_NAME`, `USER_ADDRESS`, `USER_CONTACT`, `USER_LOGIN_ID`) VALUES
(1, 'James Kuria', 'Limuru', '0700262226', 1);

