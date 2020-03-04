import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      sitinImage: file(relativePath: { eq: "sanders-sitin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      style={{ width: '100%' }}
      objectFit="center"
      objectPosition="50% 50%"
      draggable="false"
      loading="eager"
      alt="black and white image of bernie sanders at a sit-in in 1962, addressing a group of about 25 people standing and sitting on the floor"
      fluid={data.sitinImage.childImageSharp.fluid}
    />
  );
};

export default Image;
