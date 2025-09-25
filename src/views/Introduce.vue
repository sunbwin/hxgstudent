<template>
  <div class="introduce-container">
    <div v-if="contentKey == '1'" class="introduce-content">
      <h1 class="page-title">一个基于学习习惯与核心素养的双支柱发展性评估框架</h1>
      <p class="subtitle">
        摘要：传统的教育评估体系在很大程度上聚焦于可量化的知识储备，其评估结果（如分数）在预测个体长期成功方面存在局限性。实证研究，如对诺贝尔奖获得者成长轨迹的回溯分析，揭示了非智力因素，特别是行为习惯与高阶思维品质，在决定个体顶层成就中的关键作用。鉴于此，我们构建了一个超越单一知识维度的双支柱发展性评估框架。该框架旨在通过对“学习习惯”与“核心素养”两大核心构念的系统性评估与干预，为学习者的长远发展提供更具预测效度和指导意义的分析模型与成长路径。
      </p>

      <!-- 1.0 理论框架：双支柱模型 -->
      <div class="section-card">
        <h2 class="section-title">1.0 理论框架：双支柱模型</h2>
        <p class="paragraph">
          本框架的理论基石是，个体的学业成就与未来潜能，由两大相互关联的核心系统共同决定。
        </p>
        <ul class="list-disc list-inside space-y-2">
          <li><b>第一支柱：学习习惯</b> 被定义为驱动个体进行知识习得的行为动力系统。它关注学习者“如何学”而非“学到什么”，可被隐喻为学习者的内在“引擎”，决定其学习行为的效率、一致性与持久性。</li>
          <li><b>第二支柱：核心素养</b> 被定义为支撑个体进行信息加工与问题解决的认知操作系统。它决定了学习者思维的深度、广度与灵活性，是其处理复杂任务、进行创新性工作的底层能力架构。</li>
        </ul>
      </div>

      <!-- 2.0 构念一：学习习惯——学习自主性的五阶段发展模型 -->
      <div class="section-card">
        <h2 class="section-title">2.0 构念一：学习习惯——学习自主性的五阶段发展模型</h2>
        <p class="paragraph">
          我们将学习习惯的发展，依据其自主性程度，划分为一个由他律向自律演进的五阶段层级模型。该模型旨在对学习者的行为模式进行精准定位，并提供清晰的发展阶梯。
        </p>
        <ul class="list-disc list-inside space-y-2">
          <li><b>L1：外部调控阶段 (他律依从者)</b> 学习行为的启动与维持，高度依赖于外部监督、即时指令与既定规则。</li>
          <li><b>L2：规则唤醒阶段 (行为唤醒者)</b> 在清晰的规则框架下，个体能够展现初步的独立学习行为，但流程较为机械，需要间歇性外部提示以维持状态。</li>
          <li><b>L3：方法自觉阶段 (方法自觉者)</b> 个体开始内化学习目的，能够自觉、持续地执行学习任务，并有意识地应用基础性学习方法。</li>
          <li><b>L4：策略内化阶段 (策略内化者)</b> 学习行为已形成稳固的内在驱动模式。个体能依据任务情境，灵活选择并优化策略，并具备初步的自我监控与反思能力。</li>
          <li><b>L5：迁移创新阶段 (迁移创新者)</b> 学习习惯背后的原则已完全内化为个体素养。个体能将习得的策略与元认知能力，纯熟地迁移至新的、非结构性的任务情境中，并能对他人产生积极影响。</li>
        </ul>
      </div>

      <!-- 3.0 构念二：核心素养——思维品质的四维五阶发展矩阵 -->
      <div class="section-card">
        <h2 class="section-title">3.0 构念二：核心素养——思维品质的四维五阶发展矩阵</h2>
        <p class="paragraph">
          核心素养框架聚焦于四个关键维度，并同样构建了五个发展层级，形成一个评估学习者思维深度的发展矩阵。
        </p>
        <div class="table-container">
          <table class="data-table">
            <thead>
            <tr>
              <th>思维维度<br>(Cognitive Dimensions)</th>
              <th>L1: 萌芽期<br>(Emergent)</th>
              <th>L2: 规则执行期<br>(Rule-Based)</th>
              <th>L3: 独立应用期<br>(Independent)</th>
              <th>L4: 策略整合期<br>(Strategic)</th>
              <th>L5: 创新建构期<br>(Innovative)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><b>1. 逻辑思维<br>(Logical Thinking)</b></td>
              <td>进行单一维度的具象比较</td>
              <td>遵循明确的单步规则</td>
              <td>独立运用规则解决熟悉问题</td>
              <td>灵活组合方法解决新异问题</td>
              <td>识别并修复复杂系统中的逻辑谬误</td>
            </tr>
            <tr>
              <td><b>2. 批判性思维<br>(Critical Thinking)</b></td>
              <td>表达主观感受与偏好</td>
              <td>在引导下提出事实性问题</td>
              <td>有意识地区分事实与观点</td>
              <td>从多视角评估信息与证据的有效性</td>
              <td>建构并输出有理有据的原创性见解</td>
            </tr>
            <tr>
              <td><b>3. 沟通能力<br>(Communication)</b></td>
              <td>运用词语或短句进行回应</td>
              <td>运用基本完整的句子进行描述</td>
              <td>进行独立、有条理的叙述</td>
              <td>运用论据支撑观点，进行结构化表达</td>
              <td>进行策略性沟通，有效启发或说服他人</td>
            </tr>
            <tr>
              <td><b>4. 持续改进<br>(Continuous Improvement)</b></td>
              <td>在即时反馈下进行被动修正</td>
              <td>在外部提醒下回顾自身行为</td>
              <td>主动回顾并进行单一归因</td>
              <td>进行系统性反思并尝试多元化策略</td>
              <td>设计并执行个性化的、前瞻性的改进系统</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 4.0 学习者类型学：基于双支柱模型的四象限分析 -->
      <div class="section-card">
        <h2 class="section-title">4.0 学习者类型学：基于双支柱模型的四象限分析</h2>
        <p class="paragraph">
          通过将“学习习惯”（频率/坚持度）与“核心素养”（深度/思考力）两个维度进行交叉，我们构建了四种典型的学习者类型画像，用于进行深层诊断与干预指导。
        </p>
        <ul class="list-disc list-inside space-y-2">
          <li><b>类型一：高频率 + 低深度 (高执行-低认知深度型)</b> 诊断分析：该类型学习者的行为模式表现为高度的纪律性与任务执行力，但在认知层面倾向于以“完成”为导向，缺乏对知识的深层加工与概念重构。在低复杂度学段，此模式适应性良好。然而，其核心风险在于，若认知深度未能与行为投入同步发展，在面对复杂度指数级增长的高阶学业时，将出现“勤奋失效”与“边际效用递减”的现象。</li>
          <li><b>类型二：低频率 + 高深度 (高潜能-低转化型)</b> 诊断分析：该类型学习者展现出高效的认知能力与问题洞察力，但其学习行为的持续性与稳定性不足。其学业产出的不确定性较高，成果表现为“脉冲式”而非“持续性”输出。核心挑战在于将高认知潜能转化为稳定的、可预期的外显成就。若缺少持续性的行为投入，个体在面对需要长期积累与坚韧性的挑战时，可能出现“后劲不足”的问题。</li>
          <li><b>类型三：低频率 + 低深度 (发展蓄力型)</b> 诊断分析：该类型学习者在行为持续性与认知深度两个维度均处于发展的初级阶段，需要显著的外部支持。常表现为方法论缺失与动机不足的交织，易陷入“因畏难而回避，因回避而加剧能力短板”的负向循环。干预的重点并非施加压力，而是提供精准的“脚手架”支持，包括方法论的引导、正向反馈的建立与内在动机的激发。</li>
          <li><b>类型四：高频率 + 高深度 (高自驱-整合发展型)</b> 诊断分析：该类型学习者已将行为的坚持性与认知的深刻性成功整合，形成了高效、健康的内在驱动模式，为未来发展奠定了坚实基础。此阶段的发展性干预，应从知识巩固与技能训练，转向更高阶的思维范式培养，如系统性批判思维、跨学科项目式学习与前沿视野拓展，以支持其向创新型与引领型人才发展。</li>
        </ul>
      </div>
    </div>

    <!-- contentKey == 2 的内容 -->
    <div v-else-if="contentKey == '2'" class="introduce-content">
      <h1 class="page-title">《每日三反思》元认知策略效度评估准则</h1>
      <p class="subtitle">
        引言：本评估并非对学习者进行终结性评判，而是一项形成性评估工具。其核心目的在于观测学习者在习得一项新的元认知策略（即“每日三反思”）过程中的概念内化效率、程序性应用质量与认知适配性。评估结果将作为后续个性化指导的重要依据。
      </p>

      <!-- 维度一：概念理解与复述准确度 -->
      <div class="section-card">
        <h2 class="section-title">维度一：概念理解与复述准确度</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><b>评估焦点：</b>本维度旨在评估学习者对于“每日三反思”方法论的陈述性知识掌握水平。核心在于考察其能否准确内化并清晰阐述该方法的构成要素、操作规程与内在逻辑，即回答“是什么”与“如何做”的问题。</li>
          <li><b>效度释义：</b>分数的高低直接关联学习者对该方法论的认知清晰度与信息编码的准确性。高分表现为：学习者不仅能够结构化地复述其核心步骤，更能运用个人语言对各步骤的功能与目的进行逻辑自洽的释义。</li>
        </ul>
      </div>

      <!-- 维度二：执行效度与反思质量 -->
      <div class="section-card">
        <h2 class="section-title">维度二：执行效度与反思质量</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><b>评估焦点：</b>本维度旨在评估学习者在实际应用该方法时的程序性知识转化水平与认知加工深度。它衡量学习者在遵循方法论框架下，所能达到的思维品质与反思内容的深刻性。</li>
          <li><b>效度释义：</b>高分意味着学习者的反思行为已超越表层的、机械化的流程遵循，进入到深度的认知加工阶段。这体现在其反思内容的演进上，通常表现为三个层次的跃迁：
            <ul class="list-disc list-inside space-y-2 mt-2">
              <li><b>描述性反思：</b> 仅对学习事件进行简单陈述（例：“今天学了语文”）。</li>
              <li><b>分析性反思：</b> 能对学习内容进行具体化提炼与初步归因（例：“我学到了如何用‘因为所以’进行因果关系造句”）。</li>
              <li><b>批判性与前瞻性反思：</b> 能结合自我评价进行批判性审视，并形成指向未来行动的、具体的改进计划（例：“我识别到今日书写姿势不佳是导致手酸的原因，因此，明日的改进目标是刻意练习正确的握笔与坐姿”）。</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- contentKey == 3 的内容 -->
    <div v-else-if="contentKey == '3'" class="introduce-content">
      <h1 class="page-title">核心素养的发展性评估：思维范式与行为模式的演进</h1>
      <p class="subtitle">图表所量化的数据点，表征了学习者在特定核心素养维度上的发展轨迹。每一阶段的增益，均反映其内在认知与行为模式的系统性迁跃。</p>

      <!-- 一、批判性思维 -->
      <div class="section-card">
        <h2 class="section-title">一、批判性思维</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><b>构念释义：</b>批判性思维并非指简单的纠错行为，而是个体心智实现从描述性层级（罗列事件）向分析性与评鉴性层级（探究因果）的认知跃迁。我们通过引导性的元认知提问（例如：“该行为的促成因素是什么？”“存在哪些优化路径？”），促使学习者探究事件背后的因果关系，逐步将这种探究内化为一种分析性与反思性的思维范式。</li>
          <li><b>发展轨迹释义：</b>该维度分数的增益，表征了学习者思维深度的显著发展。其演进路径为：从对事件的表面、线性记述（例如：“今天发生了什么”），发展至能对自我或他者的行为表现进行初步的归因分析与模式提炼。这是个体认知复杂度提升的关键标志。</li>
        </ul>
      </div>

      <!-- 二、沟通与结构化表达 -->
      <div class="section-card">
        <h2 class="section-title">二、沟通与结构化表达</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><b>构念释义：</b>本项素养的评估焦点，并非仅在于个体的表达意愿，更在于其将内在思想进行外部编码的清晰度、逻辑性与结构性。“每日三反思”为学习者提供了一个常态化的结构性表达训练范式，旨在提升其思想的组织与呈现质量。</li>
          <li><b>发展轨迹释义：</b>图表中的数据演进，反映了学习者语言能力的质变。其典型路径为：从零散的、单元化的词汇输出，过渡到能够运用更丰富的句法结构，对个人体验（所学、所好、所思）进行连贯、完整的意义建构。该能力是进行高阶学术探究与复杂社会性互动的基础。</li>
        </ul>
      </div>

      <!-- 三、持续改进 -->
      <div class="section-card">
        <h2 class="section-title">三、持续改进</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><b>构念释义：</b>此项素养旨在培育学习者的成长型心智模式，建立“今日之我优于昨日之我”的内在信念。其核心机制在于：通过对“改进点”的系统性反思，训练学习者将问题识别转化为前瞻性的、可操作的行为修正方案，从而避免自我否定，建立积极的行动导向。</li>
          <li><b>发展轨迹释义：</b>该维度的分数爬升，标志着学习者责任归因模式的转变。其发展路径为：从依赖外部归因与被动修正（需要他人提醒），转向内部归因与主动规划（主动识别问题并规划未来行动）。这一转变是学习者个体责任感与内驱力开始形成的实证。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const contentKey = ref('1');
const route = useRoute();

onMounted(() => {
  const content = route.query.content;
  if (content) {
    contentKey.value = content;
  }
});
</script>

<style scoped>
.introduce-container {
  min-height: 100vh;
  background-color: #f0f4f8; /* A professional, light blue-gray background */
  display: flex;
  justify-content: center;
  padding: 2.4rem 1.6rem;
  font-family: 'Helvetica Neue', 'Arial', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #333;
}

.introduce-content {
  max-width: 900px;
  width: 100%;
}

.page-title {
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.8rem;
  color: #2c3e50;
  line-height: 1.3;
}

.subtitle {
  font-size: 1.6rem;
  color: #555;
  text-align: center;
  margin-bottom: 3.2rem;
  line-height: 1.6;
}

.section-card {
  background-color: #fff;
  border-radius: 1.2rem;
  margin-bottom: 2.4rem;
  padding: 2.4rem;
  box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.08); /* More pronounced shadow for a floating effect */
}

.section-title {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1.6rem;
  color: #34495e;
  border-left: 5px solid #3498db; /* A professional blue accent */
  padding-left: 1.2rem;
  line-height: 1.4;
}

.paragraph {
  font-size: 1.5rem;
  color: #444;
  line-height: 1.9;
  margin-bottom: 1.8rem;
  text-align: justify;
}

.list-disc {
  padding-left: 2rem;
  list-style-type: none; /* Remove default disc */
}

.list-disc li {
  position: relative;
  padding-left: 1.8rem; /* Space for custom bullet */
  margin-bottom: 1.2rem;
  line-height: 1.8;
  font-size: 1.5rem;
  color: #444;
}

.list-disc li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #3498db; /* Blue bullet */
  font-size: 2rem;
  line-height: 1;
}

.table-container {
  overflow-x: auto;
  margin-bottom: 2.4rem;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;
  color: #555;
}

.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 1.4rem;
  text-align: left;
  vertical-align: top;
  line-height: 1.6;
}

.data-table th {
  background-color: #ecf0f1;
  font-weight: bold;
  text-align: center;
  color: #2c3e50;
}

.data-table td:first-child {
  font-weight: 600;
  color: #34495e;
  background-color: #f9f9f9;
}

/* Enhancements for better mobile viewing */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }
  .subtitle {
    font-size: 1.4rem;
  }
  .section-title {
    font-size: 2rem;
  }
  .paragraph, .list-disc li {
    font-size: 1.4rem;
  }
  .section-card {
    padding: 1.6rem;
  }
}
</style>
