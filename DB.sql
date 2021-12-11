--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2021-12-11 21:26:08

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16414)
-- Name: postrecords; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.postrecords (
    id integer NOT NULL,
    name character varying NOT NULL,
    title character varying,
    body character varying NOT NULL,
    likes integer DEFAULT 0,
    dp character varying,
    image character varying,
    date character varying
);


ALTER TABLE public.postrecords OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16413)
-- Name: postrecords_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.postrecords_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.postrecords_id_seq OWNER TO postgres;

--
-- TOC entry 3314 (class 0 OID 0)
-- Dependencies: 209
-- Name: postrecords_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.postrecords_id_seq OWNED BY public.postrecords.id;


--
-- TOC entry 3164 (class 2604 OID 16417)
-- Name: postrecords id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.postrecords ALTER COLUMN id SET DEFAULT nextval('public.postrecords_id_seq'::regclass);


--
-- TOC entry 3308 (class 0 OID 16414)
-- Dependencies: 210
-- Data for Name: postrecords; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.postrecords (id, name, title, body, likes, dp, image, date) FROM stdin;
1	Jon Snow	\N	I think it's going to rain	143	user.png	img1.jpeg	2021-12-11
2	Lorem Ipsum	\N	I think I'm back	2022	wick.png	img2.jpeg	2021-10-15
3	Dolor sit amet	\N	This post does not have any images. Not for content nor for user display picture	404	user.png	\N	2021-08-16
4	Database User	\N	This piece of information is stored into PostgreSGL database.	99	user.png	img1.jpeg	2021-02-02
\.


--
-- TOC entry 3315 (class 0 OID 0)
-- Dependencies: 209
-- Name: postrecords_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.postrecords_id_seq', 4, true);


--
-- TOC entry 3167 (class 2606 OID 16422)
-- Name: postrecords postrecords_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.postrecords
    ADD CONSTRAINT postrecords_pkey PRIMARY KEY (id);


-- Completed on 2021-12-11 21:26:08

--
-- PostgreSQL database dump complete
--

