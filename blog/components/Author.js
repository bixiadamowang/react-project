import {Avatar,Divider} from 'antd'
import '../public/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://iknow-pic.cdn.bcebos.com/8b13632762d0f7035308c5ac0efa513d2697c50c" /></div>
            <div className="author-introduction">
                笔下大魔王的领地
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />

            </div>
        </div>
    )

}

export default Author