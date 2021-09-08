export default {
  title: '素衣的个人小站',
  srcDir: 'src',
  theme: 'blog',
  plugins: ['blog'],
  nav: [
    {
      text: '首页',
      link: '/',
      icon: 'czs-home-l'
    },
    {
      text: '分类',
      link: '/categories/',
      icon: 'czs-category-l'
    },
    {
      text: '标签',
      link: '/tags/',
      icon: 'czs-tag-l'
    },
    {
      text: '关于',
      link: '/about/',
      icon: 'czs-about-l'
    },
    {
      text: '归档',
      link: '/archives/',
      icon: 'czs-box-l'
    },
    {
      text: '友情链接',
      link: '/links/',
      icon: 'czs-link-l'
    }
  ],
  blog: {
    root: '/posts/',
    social: {
      github: 'suyizZZ',
      email: '695708197@qq.com',
    }
  },
  port: 7120,
};
