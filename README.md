# epidemic-model-for-hackthon
一 作品简介
   这是一个基于D3.js的多平台可视化可交互疫情传播系统，由网页及插件组成，本系统是疫情传播的可视化模型，通过模拟每个点接触，根据已有论文中关于传播距离、感染概率等参数，模拟整个传染过程。其中不同的    颜色代表健康，感染，接触，隔离。同时可以进行设置初始参数，感染者，过程中可以隔离和引导人群。从而实现互动过程。
   设计出发点
   新冠疫情之后，出现了一些关于疫情传播可视化的视频等作品，但大多缺乏交互性，于是我们制作出具有交互功能，同时具有一定趣味性、科普性的疫情传播模型，为用户带来更深刻的体验。用户可以通过在界面中修改    影响传播的参数，以及对模拟人群的小球点击，自由控制和体验不同条件下的疫情传播状况。

二 界面简介
1. 上方是交互按钮，包括设置人数，设置口罩覆盖率，设置社交距离等;主体为模拟界面;右侧为实时数据统计;
2. 左侧两片灰色区域可模拟校园内的人群聚集和集体行动;右侧蓝色区域为隔离区，非隔离人员无法进入，同时被隔离者无法离开;剩余区域为自由活动区域;
3. 通过点击健康人，可以设置感染者。再次点击感染者可以实现隔离操作。同时可以自由设定初始条件，直观展现感染过程中每个感染过程。
4. 在整个传播过程中，可以改变是否戴口罩、设置社交距离、设置死亡率、设置是否隔离,
5. 根据SIR传播模型，可以获得小范围预测数据。
6. 实时数据统计,生成传播人数曲线，还原整个过程，可多次对比参考。

