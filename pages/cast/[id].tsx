import { motion } from "framer-motion";
import { getSession } from "next-auth/react";
import Head from "next/head";
import React from "react";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PersonFeed from "../../components/person/PersonFeed";

type Props = {};

function CastPage({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.designbust.com/download/1037/png/netflix_logo_png_transparet512.png"
        />
      </Head>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-900">
        <PersonFeed />
        <Footer />
      </div>
    </motion.div>
  );
}

export default CastPage;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  return {
    props: {
      session: session,
    },
  };
};
