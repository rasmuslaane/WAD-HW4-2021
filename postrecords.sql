PGDMP     '                    y            wadhm4    14.1    14.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16402    wadhm4    DATABASE     e   CREATE DATABASE wadhm4 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Estonian_Estonia.1257';
    DROP DATABASE wadhm4;
                postgres    false            �            1259    16414    postrecords    TABLE       CREATE TABLE public.postrecords (
    id integer NOT NULL,
    name character varying NOT NULL,
    title character varying,
    body character varying NOT NULL,
    likes integer DEFAULT 0,
    dp character varying,
    image character varying,
    date character varying
);
    DROP TABLE public.postrecords;
       public         heap    postgres    false            �            1259    16413    postrecords_id_seq    SEQUENCE     �   CREATE SEQUENCE public.postrecords_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.postrecords_id_seq;
       public          postgres    false    210            �           0    0    postrecords_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.postrecords_id_seq OWNED BY public.postrecords.id;
          public          postgres    false    209            [           2604    16417    postrecords id    DEFAULT     p   ALTER TABLE ONLY public.postrecords ALTER COLUMN id SET DEFAULT nextval('public.postrecords_id_seq'::regclass);
 =   ALTER TABLE public.postrecords ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            �          0    16414    postrecords 
   TABLE DATA           T   COPY public.postrecords (id, name, title, body, likes, dp, image, date) FROM stdin;
    public          postgres    false    210   T       �           0    0    postrecords_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.postrecords_id_seq', 4, true);
          public          postgres    false    209            ^           2606    16422    postrecords postrecords_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.postrecords
    ADD CONSTRAINT postrecords_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.postrecords DROP CONSTRAINT postrecords_pkey;
       public            postgres    false    210            �     x�u�1o�0�g�W�Ɣ(6iUv��
�J��Is�#�(����Z�Rɋ��}����"lc���F��� ����N�Eeڹ:�����M�5�W���2�2F[�N��r���,��u�d��B������2Oz���2bpy�|���
C��@LG����(8�������Rd�,�|�O+COe<�+���9�j��~����<�V-��+���v� ��&za��Uzz�}����_H��kk�<����?�y�     