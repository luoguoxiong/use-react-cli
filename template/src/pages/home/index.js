/*
 *@description: 活动规则
 *@author: peroLuo
 *@date: 2020-06-28 17:03:53
 */
import React from "react";
import { useHistory } from "react-router-dom";
import "@/pages/home/global";

export default () => {
  const history = useHistory();

  function handleClick() {
    history.push("/goods");
  }
  return (
    <div className="shareRule" onClick={handleClick}>
      <div className="content">
        <div className="ruleItem">
          <div className="labelCircle" />
          <div className="ruleInner">2020年7月2日-7月31日</div>
        </div>
        <div className="ruleItem">
          <div className="labelCircle" />
          <div className="ruleInner">邀请对象：未注册完美志愿的用户</div>
        </div>
        <div className="ruleItem">
          <div className="labelCircle" />
          <div className="ruleInner">
            将活动链接分享至微信、朋友圈、QQ等，邀请同学通过你的链接注册并下载完美志愿APP激活后算邀请成功
          </div>
        </div>
        <div className="ruleItem">
          <div className="labelCircle" />
          <div className="ruleInner">
            成功后，你的同学获得注册奖励；邀请同学数达到一定数量，你可免费拿对应福利，所有奖励均可累加
          </div>
        </div>
        <div className="ruleItem">
          <div className="labelCircle" />
          <div className="ruleInner">
            <div className="descTitle">同学的福利</div>
            <div className="tableLine">
              <div className="tableLeft">福利内容</div>
              <div className="tableRight">领取条件</div>
            </div>
            <div className="tableContent">
              <div className="tableContentLeft">
                20元志愿填报高级卡优惠券
                <br />
                师兄师姐的选择独家分析报告
              </div>
              <div className="tableContentRight">通同学成功注册</div>
            </div>
          </div>
        </div>

        <div className="ruleItem">
          <div className="labelCircle" />
          <div className="ruleInner">
            <div className="descTitle">你的福利</div>
            <div className="tableLine">
              <div className="tableLeft">福利内容</div>
              <div className="tableRight">领取条件</div>
            </div>
            <div className="tableContent">
              <div className="tableContentLeft">
                20元志愿填报高级卡优惠券
                <br />
                师兄师姐的选择独家分析报告
              </div>
              <div className="tableContentRight">累计邀满1人</div>
            </div>
            <div className="tableContent">
              <div className="tableContentLeft">名企热招独家分析报告</div>
              <div className="tableContentRight">累计邀满2人</div>
            </div>
            <div className="tableContent">
              <div className="tableContentLeft">
                60元高级卡优惠券
                <br />
                职业分布独家分析报告
              </div>
              <div className="tableContentRight">累计邀满3人</div>
            </div>
            <div className="tableContent">
              <div className="tableContentLeft">院校性价比分析报告</div>
              <div className="tableContentRight">累计邀满4人</div>
            </div>
            <div className="tableContent">
              <div className="tableContentLeft">志愿填报高级卡</div>
              <div className="tableContentRight">累计邀满5人</div>
            </div>
          </div>
        </div>

        <div className="ruleItem">
          <div className="labelCircle" />
          <div className="ruleInner">
            7月15日-7月31日，每天抽取一个中奖用户获得5000元全年学费，同时该用户的邀请人一样能获得5000元全年学费，邀请同学越多，中奖概率越大
          </div>
        </div>

        <div className="ruleItem">
          <div className="labelCircle" />
          <div className="ruleInner">
            若中奖用户无邀请人，则只有一人可获得5000元全年学费
          </div>
        </div>

        <div className="ruleItem">
          <div className="labelCircle" />
          <div className="ruleInner">
            同学必须通过你分享的链接注册才可获得奖励,通过其他渠道下载注册，系统将无法记录邀请关系
          </div>
        </div>

        <div className="ruleItem">
          <div className="labelCircle" />
          <div className="ruleInner">
            若有违规行为(包括但不限于重复批量注册),完美志愿有权不给于奖励
          </div>
        </div>

        <div className="ruleItem">
          <div className="labelCircle" />
          <div className="ruleInner">
            完美志愿对活动保留法律允许范围内的最终解释权
          </div>
        </div>
      </div>
    </div>
  );
};
