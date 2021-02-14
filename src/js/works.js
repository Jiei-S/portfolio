import React from 'react';

import { WORD } from './util';

import WorksEnglishAppJs from '../img/works_01.png';
import WorksBlog from '../img/works_02.png';
import WorksTrainLine from '../img/works_03.png';
import WorksPortFolio from '../img/works_04.png';
import WorksNoImage from '../img/works_no_image.png';


const WORKS = [
  {
    imgPath: WorksBlog,
    title: '個人ブログ',
    comment: '日々学んだことの整理、アウトプットを目的として個人ブログを構築しました。',
    tags: [WORD.html, WORD.css, WORD.py, WORD.bootstrap, WORD.jquery, WORD.django, WORD.awsEc2],
    pathDemo: 'https://j-kimagure-it-blog.com',
  },
  {
    imgPath: WorksEnglishAppJs,
    title: '英単語学習アプリ(JavaScript)',
    comment: '学習はもちろん、ブックマーク機能や、新しく単語の登録も可能。自分だけの英単語帳を作れます。ダッシュボード画面より、習得率や学習進捗を可視化できます。',
    tags: [WORD.html, WORD.css, WORD.js, WORD.py],
    pathGit: 'https://github.com/Jiei-S/english-wordbook__JavaScript'
  },
  {
    imgPath: WorksEnglishAppJs,
    title: '英単語学習アプリ(React)',
    comment: '学習はもちろん、ブックマーク機能や、新しく単語の登録も可能。自分だけの英単語帳を作れます。ダッシュボード画面より、習得率や学習進捗を可視化できます。',
    tags: [WORD.html, WORD.css, WORD.react, WORD.py],
    pathGit: 'https://github.com/Jiei-S/english-wordbook__React'
  },
  {
    imgPath: WorksPortFolio,
    title: 'ポートフォリオ',
    comment: '本サイトです。自身のスキルや個人で開発したプロダクトをまとめております。',
    tags: [WORD.sass, WORD.react],
    pathGit: 'https://j-kimagure-it-blog.com',
  },
  {
    imgPath: WorksTrainLine,
    title: '運行情報をLINE通知',
    comment: 'Yahoo!路線情報から運行情報をスクレイピングし、LINE通知するアプリ。',
    tags: [WORD.py],
    pathGit: 'https://github.com/Jiei-S/train-info-notification'
  },
  {
    imgPath: WorksNoImage,
    title: '勤怠情報をLINE通知',
    comment: '勤怠情報をグラフ化し、LINE通知するアプリ。',
    tags: [WORD.py],
    pathGit: 'https://github.com/Jiei-S/work-report-notification'
  },
];


const Works = () => (
  <>
    <h2>個人開発のプロダクトをまとめております</h2>
    <ul className='skill-works__panel-items'>
      {
        WORKS.map((work, idx) => {
          return (
            <li key={idx} className='work'>
              <img src={work.imgPath}></img>
              <h3>{work.title}</h3>
              <p>{work.comment}</p>
              <ul className='work__tags'>
                {
                  work.tags.map((tag, idx) => {
                    return (
                      <li key={idx} className='tag'>{tag}</li>
                    );
                  })
                }
              </ul>
              <ul className='work__links'>
                {
                  work.pathDemo &&
                  <li><a href={work.pathDemo} target='_blank' rel='noopener noreferrer'>Demo</a></li>
                }
                {
                  work.pathGit &&
                  <li><a href={work.pathGit} target='_blank' rel='noopener noreferrer'>GitHub</a></li>
                }
              </ul>
            </li>
          );
        })
      }
    </ul>
  </>
);


export default Works;