import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp


def system(t, z):
    """定义微分方程系统"""
    x, y = z
    dx = np.abs(y)
    dy = np.abs(x)
    return [dx, dy]


def integrate_trajectory(initial_condition, t_span, max_time=10):
    """积分轨迹线"""
    sol = solve_ivp(
        system,
        [0, max_time],
        initial_condition,
        method="RK45",
        rtol=1e-6,
        atol=1e-9,
        events=lambda t, z: (z[0] ** 2 + z[1] ** 2 > 100),
    )

    # 向前积分
    sol_forward = sol.y if sol.success else None

    # 向后积分（时间反转）
    sol_backward = solve_ivp(
        system,
        [0, -max_time],
        initial_condition,
        method="RK45",
        rtol=1e-6,
        atol=1e-9,
        events=lambda t, z: (z[0] ** 2 + z[1] ** 2 > 100),
    )

    return sol_forward, sol_backward.y if sol_backward.success else None


def plot_phase_portrait():
    """绘制相图"""
    plt.figure(figsize=(10, 10))

    # 设置绘图范围
    x_range = np.linspace(-5, 5, 21)
    y_range = np.linspace(-5, 5, 21)

    # 绘制向量场
    X, Y = np.meshgrid(x_range, y_range)
    U = np.abs(Y)  # dx/dt
    V = np.abs(X)  # dy/dt

    # 归一化向量以便美观显示
    norm = np.sqrt(U**2 + V**2)
    norm[norm == 0] = 1  # 避免除零
    U_norm = U / norm
    V_norm = V / norm

    # 绘制向量场（箭袋图）
    plt.quiver(
        X,
        Y,
        U_norm,
        V_norm,
        color="lightgray",
        scale=30,
        width=0.004,
        headwidth=3,
        alpha=0.7,
    )

    # 绘制一些典型轨迹
    initial_conditions = [
        # 第一象限
        (1.0, 2.0),
        (0.5, 1.0),
        (2.0, 0.5),
        # 第二象限
        (-1.0, 2.0),
        (-2.0, 1.0),
        (-0.5, 1.5),
        # 第三象限
        (-1.0, -2.0),
        (-2.0, -0.5),
        (-0.5, -1.5),
        # 第四象限
        (1.0, -2.0),
        (2.0, -1.0),
        (0.5, -1.5),
        # 坐标轴上
        (0.0, 1.0),
        (0.0, -1.0),
        (1.0, 0.0),
        (-1.0, 0.0),
    ]

    colors = ["blue", "green", "red", "purple"]
    quadrant_colors = {
        1: colors[0],  # 第一象限: 蓝色
        2: colors[1],  # 第二象限: 绿色
        3: colors[2],  # 第三象限: 红色
        4: colors[3],  # 第四象限: 紫色
    }

    for i, (x0, y0) in enumerate(initial_conditions):
        # 确定象限
        if x0 > 0 and y0 > 0:
            quadrant = 1
        elif x0 < 0 and y0 > 0:
            quadrant = 2
        elif x0 < 0 and y0 < 0:
            quadrant = 3
        elif x0 > 0 and y0 < 0:
            quadrant = 4
        else:
            quadrant = 0  # 坐标轴上

        color = quadrant_colors.get(quadrant, "black")

        # 积分轨迹
        forward, backward = integrate_trajectory([x0, y0], [0, 10], max_time=8)

        # 绘制向前轨迹
        if forward is not None:
            plt.plot(forward[0], forward[1], color=color, linewidth=1.5)
            plt.plot(
                forward[0][-1],
                forward[1][-1],
                "o",
                color=color,
                markersize=4,
                markeredgecolor="black",
            )

        # 绘制向后轨迹
        if backward is not None:
            plt.plot(
                backward[0],
                backward[1],
                color=color,
                linewidth=1.5,
                linestyle="--",
                alpha=0.7,
            )

    # 绘制坐标轴
    plt.axhline(y=0, color="k", linestyle="-", linewidth=0.5)
    plt.axvline(x=0, color="k", linestyle="-", linewidth=0.5)

    # 绘制平衡点（在原点处）
    plt.plot(0, 0, "ro", markersize=8, markeredgecolor="black")

    # 添加象限标签
    plt.text(2.5, 2.5, "I", fontsize=12, fontweight="bold", color=colors[0])
    plt.text(-3.5, 2.5, "II", fontsize=12, fontweight="bold", color=colors[1])
    plt.text(-3.5, -3.5, "III", fontsize=12, fontweight="bold", color=colors[2])
    plt.text(2.5, -3.5, "IV", fontsize=12, fontweight="bold", color=colors[3])

    # 绘制特殊曲线
    # 第一象限双曲线 y^2 - x^2 = c
    x_curve = np.linspace(0.1, 3, 100)
    for c in [0.5, 1, 2]:
        y_curve_pos = np.sqrt(x_curve**2 + c)
        y_curve_neg = -np.sqrt(x_curve**2 + c)
        plt.plot(x_curve, y_curve_pos, ":", color="blue", alpha=0.5)
        plt.plot(-x_curve, y_curve_pos, ":", color="green", alpha=0.5)
        plt.plot(-x_curve, y_curve_neg, ":", color="red", alpha=0.5)
        plt.plot(x_curve, y_curve_neg, ":", color="purple", alpha=0.5)

    # 第二/四象限圆弧 x^2 + y^2 = r^2
    theta = np.linspace(0, np.pi / 2, 50)
    for r in [1, 2, 3]:
        x_circle = r * np.cos(theta)
        y_circle = r * np.sin(theta)
        plt.plot(-x_circle, y_circle, ":", color="green", alpha=0.5)  # 第二象限
        plt.plot(x_circle, -y_circle, ":", color="purple", alpha=0.5)  # 第四象限

    # 设置图形属性
    plt.xlabel("x", fontsize=12)
    plt.ylabel("y", fontsize=12)
    plt.title("Phase Portrait: $\dot{x}=|y|$, $\dot{y}=|x|$", fontsize=14)
    plt.grid(True, linestyle="--", alpha=0.3)
    plt.axis("equal")
    plt.xlim(-5, 5)
    plt.ylim(-5, 5)

    # 添加图例
    from matplotlib.patches import Patch

    legend_elements = [
        Patch(facecolor=colors[0], label="Quadrant I: $\dot{x}=y, \dot{y}=x$"),
        Patch(facecolor=colors[1], label="Quadrant II: $\dot{x}=y, \dot{y}=-x$"),
        Patch(facecolor=colors[2], label="Quadrant III: $\dot{x}=-y, \dot{y}=-x$"),
        Patch(facecolor=colors[3], label="Quadrant IV: $\dot{x}=-y, \dot{y}=x$"),
        Patch(facecolor="red", label="Equilibrium point (0,0)"),
    ]
    plt.legend(handles=legend_elements, loc="upper left", fontsize=10)

    plt.tight_layout()
    plt.savefig("phase_portrait_abs_system.png", dpi=300)


def analyze_motion_direction():
    """分析运动方向"""
    print("运动方向分析:")
    print("-" * 40)
    print("第一象限 (x>0, y>0): dx/dt = y > 0, dy/dt = x > 0")
    print("  方向: 右上")
    print()
    print("第二象限 (x<0, y>0): dx/dt = y > 0, dy/dt = |x| = -x > 0")
    print("  方向: 右上")
    print()
    print("第三象限 (x<0, y<0): dx/dt = |y| = -y > 0, dy/dt = |x| = -x > 0")
    print("  方向: 右上")
    print()
    print("第四象限 (x>0, y<0): dx/dt = |y| = -y > 0, dy/dt = x > 0")
    print("  方向: 右上")
    print()
    print("结论: 所有象限中，dx/dt ≥ 0, dy/dt ≥ 0，轨线总是向右上方运动。")
    print("轨迹最终都会进入第一象限并趋向无穷远。")


if __name__ == "__main__":
    plot_phase_portrait()
    analyze_motion_direction()
