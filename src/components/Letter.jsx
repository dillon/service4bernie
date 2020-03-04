import React from 'react';
import Link from './Link';

const Letter = ({ short }) => (
  <div>
    <p>
      As members of the food service industry, we endorse Bernie Sanders for President.
      His platform attempts to address the precarity faced by service workers, and we
      see him as an ally in our struggle for stable, dignified lives. As we well know,
      food service workers in both the front and back of house are typically left to
      negotiate healthcare on the &ldquo;marketplace,&rdquo; and are not guaranteed
      sick or parental leave (to the detriment of public health.) While we work in an
      industry notoriously difficult to unionize and collectively bargain within, we are
      not unorganized or divided. With a collective voice, we invite Bernie into our
      struggle, and commit ourselves to the campaign.
    </p>
    <p>
      We come together as service industry workers to imagine a brighter
      {' '}
      <i>present and future</i>
      {' '}
      because our community is already a bright one. We count as one of Bernie&rsquo;s
      largest bases of volunteer and donor support, and want to formally endorse him for
      President through this forum, since we do not have a union or formal body through
      which we can do so. We sign this endorsement echoing the central slogan of the
      movement that supports Bernie:
      {' '}
      <i style={{ color: 'white' }}>Not me, us.</i>
    </p>
    <div>
      {short
        ? <Link internal to="/letter">Read More</Link>
        : (
          <>
            <p>
              Here are a few of the many reasons why the service industry SPECIFICALLY
              should and DOES support Bernie Sanders for President:
            </p>
            <ol>
              <li>
                Simply put, we need single-payer Medicare For All. We need the freedom of
                movement it provides, both for ourselves and for our families. Many of us
                dedicate at least some of our paycheck and much mental energy toward our
                families&rsquo; and specifically our parents&rsquo; healthcare. Our jobs offer no
                annual raises or bonuses, no tenure; we need the security of our own
                healthcare and healthcare for our families as we both age.
              </li>
              <li>
                Sanders has plans to build social services beyond healthcare that our
                industry doesn&rsquo;t provide but—because of the physical and at times
                inconsistent nature of our work—we desperately need.
              </li>
              <li>
                We want a President who will advocate for those who are undocumented,
                in the food service industry and beyond. We need compassionate
                immigration reform and paths to citizenship, and, like Sanders,
                demand an immediate halt to all deportation and the complete
                abolition of ICE.
              </li>
              <li>
                Bernie Sanders has consistently fought for and wants to expand
                Social Security, a social safety net we as service industry workers
                desperately need for a dignified retirement.
              </li>
              <li>
                The Sanders&rsquo; campaign has invested in and built on the organizing
                efforts of people of color across the country. We are an industry
                that is as segregated as it is diverse. We commit to recognizing
                and fighting the persistent evils of white supremacy. We as service
                industry workers must echo the work of Bernie&rsquo;s multiracial coalition
                in this struggle to counter racism—and antiblackness specifically—in
                the workplace, the workforce, and in the larger public consciousness.
              </li>
              <li>
                As laborers who primarily work with produce from the land and animals,
                we recognize that we need a President who will enact a Green New Deal
                and pass comprehensive environmental justice reforms to ensure sustainable
                food production and food / water security for all as climate catastrophe looms.
              </li>
              <li>
                Sanders has publicly invested in his role as a mentor since the last
                election cycle. As democratic socialism&rsquo;s role in our national discourse
                grows, we will also need to learn from and teach each other  about
                labor and workers&rsquo; rights. Sanders&rsquo; growth as a candidate models how we
                can all be pushed to be better for those in our industry and beyond it!
              </li>
              <li>
                Bernie Sanders is a pro-worker candidate, with one of his central issues
                being workplace democracy focused on expanding union membership and
                protecting workers&rsquo; rights. This is vital for workers in industries
                typically excluded from labor protections, such as the food service
                and agricultural industries.
              </li>
              <li>
                The risks we will be able to take when we have a social safety net
                will not only make our lives better, but will actually improve and
                grow the food service industry. It will also mean we can pursue
                meaningful, careful, expansive lives outside of work.
              </li>
              <li>
                Many workers in the service industry are saddled with student debt, and
                struggle to keep up with payments or have the time to find work beyond
                restaurants, coffee shops, or bars. Bernie is the only candidate who wants
                to cancel
                {' '}
                <i>all</i>
                {' '}
                student debt, and guarantee tuition-free public universities moving forward.
                Again, these changes can only improve our industry.
              </li>
              <li>
                Some of us have the schedules and flexibility to organize for these very
                changes; a match made in heaven.
              </li>
              <li>
                The Sanders movement is the sole campaign invested in a hopeful and
                joyful vision of the future beyond a &ldquo;just good enough&rdquo; neoliberal
                present in which most people struggle to survive. We may love service
                but refuse to establish ourselves as a permanent underclass serving
                the wealthy. We witness these imbalances of power every day in our
                working lives, and want a president who will fight for the working
                people. We owe it to each other, and those we do not know, to
                imagine a better world. We all deserve the right to a dignified
                life.
              </li>

            </ol>
          </>
        )}
    </div>

  </div>
);


export default Letter;
