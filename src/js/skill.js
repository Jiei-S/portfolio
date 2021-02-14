import React from 'react';
import PropTypes from 'prop-types';

import { WORD } from './util';

import LogoHtml from '../img/logo_html.svg';
import LogoCss from '../img/logo_css.svg';
import LogoSass from '../img/logo_sass.svg';
import LogoJavaScript from '../img/logo_javascript.svg';
import LogoTypescript from '../img/logo_typescript.svg';
import LogoPhp from '../img/logo_php.svg';
import LogoPython from '../img/logo_python.svg';
import LogoGo from '../img/logo_go.svg';
import LogoBootstrap from '../img/logo_bootstrap.svg';
import LogoJquery from '../img/logo_jquery.svg';
import LogoReact from '../img/logo_react.svg';
import LogoDjango from '../img/logo_django.svg';
import LogoWagtail from '../img/logo_wagtail.svg';
import LogoPostgresql from '../img/logo_postgresql.svg';
import LogoSqlite from '../img/logo_sqlite.svg';
import LogoHeroku from '../img/logo_heroku.svg';
import LogoAwsEc2 from '../img/logo_aws-ec2.svg';
import LogoGithub from '../img/logo_github.svg';
import LogoBitbucket from '../img/logo_bitbucket.svg';


const PROGRAMMING_LANGUAGE = [
  {
    logo: <LogoHtml />,
    title: WORD.html,
    comment: '実務経験あり。Webサイト・アプリ開発で使用。'
  },
  {
    logo: <LogoCss />,
    title: WORD.css,
    comment: '実務経験あり。Webサイト・アプリ開発で使用。'
  },
  {
    logo: <LogoSass />,
    title: WORD.sass,
    comment: '個人開発で使用。独学で勉強中。'
  },
  {
    logo: <LogoJavaScript />,
    title: WORD.js,
    comment: '実務経験あり。Webサイト・アプリ開発で使用。'
  },
  {
    logo: <LogoTypescript />,
    title: WORD.ts,
    comment: '独学で勉強中。'
  },
  {
    logo: <LogoPhp />,
    title: WORD.php,
    comment: '一度だけお問い合わせフォームを開発。'
  },
  {
    logo: <LogoPython />,
    title: WORD.py,
    comment: '実務経験あり。Webアプリ開発で使用。サーバサイドの中では一番使用している。'
  },
  {
    logo: <LogoGo />,
    title: WORD.go,
    comment: '個人開発で使用。独学で勉強中。'
  },
];


const LIBRARY_FRAMEWORK = [
  {
    logo: <LogoBootstrap />,
    title: WORD.bootstrap,
    comment: '実務経験あり。Webアプリ開発で使用。'
  },
  {
    logo: <LogoJquery />,
    title: WORD.jquery,
    comment: '実務経験あり。Webサイト・アプリ開発で使用。'
  },
  {
    logo: <LogoReact />,
    title: WORD.react,
    comment: '個人開発で使用。独学で勉強中。'
  },
  {
    logo: <LogoDjango />,
    title: WORD.django,
    comment: '実務経験あり。Webアプリ開発で使用。'
  },
  {
    logo: <LogoWagtail />,
    title: WORD.wagtail,
    comment: 'CMS。個人ブログに使用。'
  },
];


const DATABASE = [
  {
    logo: <LogoPostgresql />,
    title: WORD.psql,
    comment: '実務経験あり。psycopg2を使用。'
  },
  {
    logo: <LogoSqlite />,
    title: WORD.sqlite,
    comment: '実務経験あり。sqlite3を使用。'
  },
];


const INFRASTRUCTURE = [
  {
    logo: <LogoHeroku />,
    title: WORD.heroku,
    comment: '個人開発で使用。'
  },
  {
    logo: <LogoAwsEc2 />,
    title: WORD.awsEc2,
    comment: '個人開発で使用。AWS全体的に独学で勉強中。'
  },
];


const SOURCE_CODE_MANAGEMENT = [
  {
    logo: <LogoGithub />,
    title: WORD.github,
    comment: '個人開発で使用。'
  },
  {
    logo: <LogoBitbucket />,
    title: WORD.bitbucket,
    comment: '実務経験あり。'
  },
];


const Item = (props) => (
  <ul className='skill-works__panel-items'>
    {
      props.data.map((d, idx) => {
        return (
          <li key={idx} className='skill'>
            {d.logo}
            <h3>{d.title}</h3>
            <p>{d.comment}</p>
          </li>
        );
      })
    }
  </ul>
);

Item.propTypes = {
  data: PropTypes.array,
};


const Skill = () => (
  <>
    <h2>Programming language</h2>
    <Item data={PROGRAMMING_LANGUAGE} />
    <h2>Library/Framework</h2>
    <Item data={LIBRARY_FRAMEWORK} />
    <h2>Database</h2>
    <Item data={DATABASE} />
    <h2>Infrastructure</h2>
    <Item data={INFRASTRUCTURE} />
    <h2>Source code management</h2>
    <Item data={SOURCE_CODE_MANAGEMENT} />
  </>
);

export default Skill;